import SupplementOrder from "../../models/Supplements/SupplementOrder.js"
export async function createOne(req, res) {
    const Supplement_Type = req.body.Supplement_Type
    const SupplementOrder_Date = req.body.SupplementOrder_Date
    const Supplement_Price = req.body.Supplement_Price
    const Supplement_Quantity = req.body.Supplement_Quantity
    const Client_Name  = req.body.Client_Name
    const OrderId="12345#12345"


    

    const SupplementOrder = new SupplementOrder({
        OrderId:OrderId,
        Supplement_Type:Supplement_Type,
        SupplementOrder_Date:SupplementOrder_Date,
        Supplement_Price:Supplement_Price,
        Supplement_Quantity:Supplement_Quantity,
        Client_Name: Client_Name
    });

    try {
        await SupplementOrder.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all SupplementOrder
export async function getAll(req, res) {

    const userId = "45821463#23669545";

    try {
        const supplementOrder = await SupplementOrder.find({ userId });
        res.status(200).json(supplementOrder);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a SupplementOrder by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const { OrderId,Supplement_Type, SupplementOrder_Date,Supplement_Price,Supplement_Quantity, Client_Name } = req.body;
    try {
        const updatedSupplementOrder = await SupplementOrders.findByIdAndUpdate(
            objectId,
            {
                OrderId:OrderId,
                Supplement_Type:Supplement_Type,
                SupplementOrder_Date:SupplementOrder_Date,
                Supplement_Price:Supplement_Price,
                Supplement_Quantity:Supplement_Quantity,
                Client_Name: Client_Name
            },
            { new: true }
        );
        res.status(200).send(updatedSupplementOrder);
        console.log('SupplementOrder updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a Supplements by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await SupplementOrder.findByIdAndDelete(objectId);
        res.status(200).send('SupplementOrder deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };