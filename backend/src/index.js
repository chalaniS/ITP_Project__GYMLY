import "dotenv/config";
import mongoose from "mongoose";
// import config from "./configs/config";
import express from "express";
import cors from "cors";
//import Supplementsrouter from "./routes/Supplements/Supplementsrouter.js";
import Supplements from "./models/Supplements/Supplements.js";
// import { connect } from "./utils/dbconnect"

import Orderread from "./models/Supplements/Orderread.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});

let database;

//app.use('/Supplements',Supplementsrouter)

app.listen(PORT, async () => {

    // Start the server
    console.log(`Server started on port ${PORT}`)

    //connect db
    mongoose
        .connect("mongodb+srv://gymly:gymly123@gymly-db-cluster.sfmuyh9.mongodb.net/gymly-db?retryWrites=true&w=majority")
        .then((connection) => {
            database = connection;
            console.log("Database Synced");
        })
        .catch((err) => {
            console.log(err.message);
        });

   
});





app.post("/Supplements", async (req, res) => {

    console.log(req.body);

    const Supplement_Type = req.body.type;
    const Supplement_Id = req.body.id;
    const Supplement_Price = req.body.price;
    const Supplement_Quantity = req.body.qty;
    const UserId = "12345#12345"

    const supplements = new Supplements({
        UserId: UserId,
        Supplement_Type: Supplement_Type,
        Supplement_Id: Supplement_Id,
        Supplement_Price: Supplement_Price,
        Supplement_Quantity: Supplement_Quantity
    });

    try {
        await supplements.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
});

app.get("/Supplements", async (req, res) => {

    const userId = "45821463#23669545";

    try {
        const supplements = await Supplements.find({ userId });
        console.log("supplements read successfully'");
        res.status(200).json(supplements);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

// read a single supplement by id for update
app.get('/Supplements/:id', async (req, res) => {
    try {
        const supplements = await Supplements.findById(req.params.id);
        console.log('Supplement read successfully for update');
        res.status(200).json(supplements);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});


app.put("/Supplements/:id", async (req, res) => {
    const objectId = req.params.id;
    const { Supplement_Type, Supplement_Id, Supplement_Price, Supplement_Quantity } = req.body;
    try {
        const updatedSupplements = await Supplements.findByIdAndUpdate(
            objectId,
            {
                Supplement_Type: Supplement_Type,
                Supplement_Id: Supplement_Id,
                Supplement_Price: Supplement_Price,
                Supplement_Quantity: Supplement_Quantity
            },
            { new: true }
        );
        res.status(200).send(updatedSupplements);
        console.log('Supplements updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
});


app.delete("/Supplements/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await Supplements.findByIdAndDelete(objectId);
        console.log("'Supplements deleted successfully'");
        res.status(200).send('Supplements deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});



const Order = require('./models/Order'); // import the Mongoose model

app.post("/Orderread", async (req, res) => {
  console.log(req.body);

  const Supplement_Date = req.body.Supplement_Date;
  const Supplement_Type = req.body.Supplement_Type;
  const Supplement_Quantity = req.body.Supplement_Quantity;
  const UserId = "12345#12345";

  const order = new Order({
    UserId: UserId,
    Supplement_Date: Supplement_Date,
    Supplement_Type: Supplement_Type,
    Supplement_Quantity: Supplement_Quantity,
  });
  try {
    await order.save();
    console.log("successfully data inserted");
    res.status(200).send("Data inserted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error occurred while inserting data");
  }
});



    // app.post("/Orderread", async (req, res) => {

    //     console.log(req.body);
    
    //     const Supplement_Date = req.body.Supplement_Date
    //     const  Supplement_Type = req.body.Supplement_Type
    //     const  Supplement_Quantity = req.body.Supplement_Quantity
    //     const UserId="12345#12345"

    
    //     const Orderread  = new Orderread({
    //         UserId:UserId,
    //         Supplement_Date:Supplement_Date,
    //         Supplement_Type:Supplement_Type,
    //         Supplement_Quantity:Supplement_Quantity
    //     });
    //     try {
    //         await Orderread.save()
    //         console.log("successfully data inserted")
    //         res.status(200).send("Data inserted successfully");
    //     } catch (err) {
    //         console.log(err);
    //         res.status(500).send("Error occurred while inserting data");
    //     }
    // });
//     app.get("/Orderread", async (req, res) => {

//         const userId = "45821463#23669545";
    
//         try {
//             const Orderread = await Orderread.find({ userId });
//             console.log("Orderread read successfully'");
//             res.status(200).json(orderread);
//         } catch (err) {
//             console.log(err);
//             res.status(500).send('Error occurred while retrieving data');
//         }
    
//     });
//     // read a single Orderread  by id for update
// app.get('/Orderreads/:id', async (req, res) => {
//     try {
//         const Orderread = await Orderread.findById(req.params.id);
//         console.log('Orderread read successfully for update');
//         res.status(200).json(orderread);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error occurred while retrieving data');
//     }
// });
    
// app.put("/Orderread/:id", async (req, res) => {
//     const objectId = req.params.id;
//     const {  UserId, Supplement_Date,Supplement_Type,Supplement_Quantity } = req.body;
//     try {
//         const updatedOrderread = await Orderread.findByIdAndUpdate(
//             objectId,
//             {UserId:UserId,
//                 Supplement_Date:Supplement_Date,
//                 Supplement_Type:Supplement_Type,
//                 Supplement_Quantity:Supplement_Quantity
//             },
//             { new: true }
//         );
//         res.status(200).send(updatedOrderread);
//         console.log('Orderread updated successfully');

//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while updating data');
//     }
// });
// app.delete("/Orderread/:id", async (req, res) => {
//     const objectId = req.params.id;
//     try {
//         await Orderread.findByIdAndDelete(objectId);
//         console.log("'Orderread deleted successfully'");
//         res.status(200).send('Orderreads deleted successfully');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while deleting data');
//     }
// });
