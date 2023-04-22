import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import ReportModel from "./models/Payment/ReportModel.js";
import SupplierModel from "./models/Supplier/SupplierOrder.js"

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});

let database;
// app.use('/Report',router)


app.listen(PORT, () => {

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

app.post("/payment453", async (req, res) => {

    console.log(req.body);


    const financialReportId = req.body.financialReportId;
    const reportCatogery = req.body.reportCatogery;
    const employeeID = req.body.employeeID;
    const uploadedDate = req.body.uploadedDate;
    const uploadedTime = req.body.uploadedTime;
    const userId = "45821463#23669545";

    // Validate input data
    if (!financialReportId || !reportCatogery || !employeeID || !uploadedDate || !uploadedTime) {
        return res.status(400).send("Missing required fields");
    }

    const report = new ReportModel({
        userId: userId,
        financialReportId: financialReportId,
        reportCatogery: reportCatogery,
        employeeID: employeeID,
        uploadedDate: uploadedDate,
        uploadedTime: uploadedTime,
    });

    try {
        await report.save();
        console.log("Successfully inserted data");
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
    
});

app.get("/payment453", async (req, res) => {

    const userId = "45821463#23669545";

    try {
        const report = await ReportModel.find({ userId });
        console.log("'Report read successfully'");
        res.status(200).json(report);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }

});

// read a single supplement by id for update
app.get('/payment453/:id', async (req, res) => {
    try {
        const report = await ReportModel.findById(req.params.id);
        console.log('Report read successfully for update');
        res.status(200).json(report);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
});



app.put("/payment453/:id", async (req, res) => {
    const objectId = req.params.id;
    const { userId,financialReportId,reportCatogery,employeeID,uploadedDate,uploadedTime} = req.body;
    try {
        const updatedReports = await ReportModel.findByIdAndUpdate(
            objectId,
            {
                userId:"45821463#23669545",
                financialReportId: financialReportId,
                reportCatogery: reportCatogery,
                employeeID: employeeID,
                uploadedDate: uploadedDate,
                uploadedTime: uploadedTime,
            },
            { new: true }
        );
        res.status(200).send(updatedReports);
        console.log('Reports updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
});


app.delete("/payment453/:id", async (req, res) => {
    const objectId = req.params.id;
    try {
        await ReportModel.findByIdAndDelete(objectId);
        console.log("'Reports deleted successfully'");
        res.status(200).send('Reports deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
});



//Supplier

  
app.post('/suppliers', async (req, res) => {
    const reportId = req.body.reportId;
    const SupplierName = req.body.SupplierName;
    const ProductName = req.body.Product;
    const Quantity = req.body.Quantity;
    const userId = "45821463#23669545";
    const Size = req.body.Size;
    const Supplier = new SupplierModel({
        userId: userId,
        reportId: reportId,
        ProductName: ProductName,
        Quantity: Quantity,
        SupplierName: SupplierName,
        Size: Size
    });

    try {
        await Supplier.save();
        console.log("Successfully inserted data");
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
  });

app.get('/suppliers', async (req, res) => {

    const userId = "45821463#23669545";
    try {
      const suppliers = await SupplierModel.find();
      res.json(suppliers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  
  app.get('/suppliers/:id', async (req, res) => {

    const userId = "45821463#23669545";
    try {
      const supplier = await SupplierModel.findById(req.params.id);
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      res.json(supplier);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  
  app.put('/suppliers/:id', async (req, res) => {
    const userId = "45821463#23669545";
    try {
      const supplier = await SupplierModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      res.json(supplier);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  app.delete('/suppliers/:id', async (req, res) => {
    const userId = "45821463#23669545";
    try {
      const supplier = await SupplierModel.findByIdAndDelete(req.params.id);
      if (!supplier) {
        return res.status(404).json({ message: 'Supplier not found' });
      }
      res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  