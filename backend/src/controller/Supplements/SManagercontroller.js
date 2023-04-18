import SManager from '../../models/Supplements/SManager.js'
export async function createOne(req, res) {
    const SManager_Name = req.body.SManager_Name
    const   Report_Id = req.body.  Report_Id
    const UserId="12345#12345"


    

    const SManager = new SManager({
        UserId:UserId,
        SManager_Name: SManager_Name,
        Report_Id: Report_Id, 
        
    });

    try {
        await SManager.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all SManager
export async function getAll(_req, res) {

    const userId = "45821463#23669545";

    try {
        const SManager = await SManager.find({ userId });
        res.status(200).json(smanager);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a Supplements by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const {SManager_Name,  Report_Id, } = req.body;
    try {
        const updatedSManager = await SManager.findByIdAndUpdate(
            objectId,
            { UserId:UserId,
                SManager_Name: SManager_Name,
                Report_Id: Report_Id,
                
            },
            { new: true }
        );
        res.status(200).send(updatedSManager);
        console.log('SManager updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a Supplements by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await SManager.findByIdAndDelete(objectId);
        res.status(200).send('SManager deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };