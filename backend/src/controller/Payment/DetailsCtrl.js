import Report from '../../models/Payment/ReportModel.js';
import DetailsModel from '../../controller/Payment/DetailsModel.js';

// Create a function to upload a new credit card
export async function createOne(req, res) {
    const fullName = req.body.fullName
    const address = req.body.address
    const state = req.body.state
    const zipCode = req.body.zipCode
    const paymentType = req.body.paymentType
    const paymentMethod = req.body.paymentMethod
    const creditcardNumber = req.body.creditcardNumber
    const expireMonth = req.body.expireMonth
    const expireYear = req.body.expireYear
    const cvv = req.body.cvv

    console.log(timeslot + instructor + section)

    const Details = new DetailsModel({

        userId: "45821463#23669545",
        fullName:fullName,
        address:address,
        state:state,
        zipCode:zipCode,
        paymentType:paymentType,
        paymentMethod:paymentMethod,
        creditcardNumber:creditcardNumber,
        expireMonth:expireMonth,
        expireYear:expireYear,
        cvv:cvv
    });

    try {
        await Details.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all card details
export async function getAll(req, res) {

    const userId = "45821463#23669545";

    try {
        const Details = await DetailsModel.find({ userId });
        res.status(200).json(Details);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a report by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const {fullName,address,state,zipCode,paymentType,paymentMethod,creditcardNumber,expireMonth,expireYear,cvv} = req.body;
    try {
        const updatedDetails = await DetailsModel.findByIdAndUpdate(
            objectId,
            {
                fullName:fullName,
                address:address,
                state:state,
                zipCode:zipCode,
                paymentType:paymentType,
                paymentMethod:paymentMethod,
                creditcardNumber:creditcardNumber,
                expireMonth:expireMonth,
                expireYear:expireYear,
                cvv:cvv
            },
            { new: true }
        );
        res.status(200).send(updatedDetails);
        console.log('Card details updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a report by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await DetailsModel.findByIdAndDelete(objectId);
        res.status(200).send('Card details deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };