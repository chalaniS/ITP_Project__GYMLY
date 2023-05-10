import Supplements from"../../models/Supplements/Supplements.js"
export async function createOne(req, res) {
    const Supplement_Type = req.body.Supplement_Type
    const Supplement_Id = req.body.Supplement_Id
    const Supplement_Price = req.body.Supplement_Price
    const Supplement_Quantity = req.body.Supplement_Quantity
    const UserId="12345#12345"


    

    const supplements = new supplements({
        UserId:UserId,
        Supplement_Type:Supplement_Type,
        Supplement_Id:Supplement_Id,
        Supplement_Price:Supplement_Price,
        Supplement_Quantity:Supplement_Quantity
    });

    try {
        await supplements.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all Supplements
export async function getAll(req, res) {

    const userId = "45821463#23669545";

    try {
        const supplements = await Supplements.find({ userId });
        res.status(200).json(supplements);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a Supplements by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const { Supplement_Type,Supplement_Id,Supplement_Price,Supplement_Quantity } = req.body;
    try {
        const updatedSupplements = await Supplements.findByIdAndUpdate(
            objectId,
            {
                Supplement_Type:Supplement_Type,
                Supplement_Id:Supplement_Id,
                Supplement_Price:Supplement_Price,
                Supplement_Quantity:Supplement_Quantity
            },
            { new: true }
        );
        res.status(200).send(updatedSupplements);
        console.log('Supplements updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a Supplements by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await Supplements.findByIdAndDelete(objectId);
        res.status(200).send('Supplements deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };