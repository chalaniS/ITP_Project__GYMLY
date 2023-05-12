import Report from '../../models/Payment/ReportModel.js';
import ReportModel from '../../models/Payment/ReportModel.js';

// Create a function to create a new schedule
export async function createOne(req, res) {
    const financialReportId = req.body.financialReportId
    const reportCatogery = req.body.reportCatogery
    const employeeID = req.body.employeeID
    const uploadedDate = req.body.uploadedDate
    const uploadedTime = req.body.uploadedTime

    console.log(timeslot + instructor + section)

    const Report = new ReportModel({

        userId: "45821463#23669545",
        financialReportId:financialReportId,
        reportCatogery:reportCatogery,
        employeeID:employeeID,
        uploadedDate:uploadedDate,
        uploadedTime:uploadedTime
    });

    try {
        await Report.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all schedules
export async function getAll(req, res) {

    const userId = "45821463#23669545";

    try {
        const Report = await ReportModel.find({ userId });
        res.status(200).json(schedules);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a schedule by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const { dayscount, date, timeslot, instructor, section } = req.body;
    try {
        const updatedReport = await ReportModel.findByIdAndUpdate(
            objectId,
            {
                financialReportId:financialReportId,
                reportCatogery:reportCatogery,
                employeeID:employeeID,
                uploadedDate:uploadedDate,
                uploadedTime:uploadedTime
            },
            { new: true }
        );
        res.status(200).send(updatedReport);
        console.log('Report updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a schedule by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await ReportModel.findByIdAndDelete(objectId);
        res.status(200).send('Report deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };