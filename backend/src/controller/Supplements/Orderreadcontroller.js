import Orderread from"../../models/Supplements/Orderread.js"
export async function createOne(req, res) {
    const Supplement_Date = req.body.Supplement_Date
    const  Supplement_Type = req.body.Supplement_Id
    const  Supplement_Quantity = req.body.Supplement_Price
    
    const UserId="12345#12345"


    

    const orderread = new orderread({
        UserId:UserId,
        Supplement_Date:Supplement_Date,
        Supplement_Type:Supplement_Type,
        Supplement_Quantity:Supplement_Quantity
    });

    try {
        await Orderread.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all Orderread
export async function getAll(req, res) {

    const userId = "45821463#23669545";

    try {
        const orderread = await Orderread.find({ userId });
        res.status(200).json(Orderread);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a Orderread by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const {   UserId, Supplement_Date,Supplement_Type,Supplement_Quantity } = req.body;
    try {
        const updatedOrderread = await Orderread.findByIdAndUpdate(
            objectId,
            {
        UserId:UserId,
        Supplement_Date:Supplement_Date,
        Supplement_Type:Supplement_Type,
        Supplement_Quantity:Supplement_Quantity
            },
            { new: true }
        );
        res.status(200).send(updatedOrderread);
        console.log('Orderread updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a Orderread by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await Orderread.findByIdAndDelete(objectId);
        res.status(200).send('Orderread deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };