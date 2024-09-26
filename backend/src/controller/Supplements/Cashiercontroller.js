import Cashier from "../../models/Supplements/Cashier,js"
export async function createOne(req, res) {
    const Cashier_name = req.body.Cashier_name
    const  Cashier_Qualiifications = req.body. Cashier_Qualiifications
    const WorkExperience = req.body.WorkExperience
    const UserId="12345#12345"


    

    const Cashier = new Cashier({
        UserId:UserId,
        Cashier_name:Cashier_name,
        Cashier_Qualiifications: Cashier_Qualiifications,
        WorkExperience:WorkExperience,
      
    });

    try {
        await Cashier.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all Supplements
export async function getAll(_req, res) {

    const userId = "45821463#23669545";

    try {
        const Cashier = await Cashier.find({ userId });
        res.status(200).json(cashier);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a Supplements by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const { Cashier_name, Cashier_Qualiifications, WorkExperience} = req.body;
    try {
        const updatedCashier = await Cashier.findByIdAndUpdate(
            objectId,
            { UserId:UserId,
                Cashier_name:Cashier_name,
                Cashier_Qualiifications: Cashier_Qualiifications,
                WorkExperience:WorkExperience,
            },
            { new: true }
        );
        res.status(200).send(updatedCashier);
        console.log('Cashier updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a Supplements by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await Cashier.findByIdAndDelete(objectId);
        res.status(200).send('Cashier deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };