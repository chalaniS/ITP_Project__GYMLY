import payment from '../../models/Payment/paymentModel.js';
import paymentModel from '../../models/Payment/paymentModel.js';

// Create a function to create a new schedule
export async function createOne(req, res) {
    const pID = req.body.pID
    const amount = req.body.amount
    const paymentDate = req.body.paymentDate
    const paymentMethode = req.body.paymentMethode
    const paymentType = req.body.paymentType
    const verificationCode = req.body.verificationCode

    console.log(timeslot + instructor + section)

    const payment = new paymentModel({

        userId: "45821463#23669545",
         pID:pID,
         amount:amount,
         paymentDate:paymentDate,
         paymentMethode:paymentMethode,
         paymentType:paymentType,
         verificationCode:verificationCode
    });

    try {
        await payment.save()
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
        const payment = await paymentModel.find({ userId });
        res.status(200).json(payment);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update a schedule by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const {pID,amount,paymentDate,paymentMethode,paymentType,verificationCode} = req.body;
    try {
        const updatedpayment = await paymentModel.findByIdAndUpdate(
            objectId,
            {
                pID:pID,
                amount:amount,
                paymentDate:paymentDate,
                paymentMethode:paymentMethode,
                paymentType:paymentType,
                verificationCode:verificationCode 
            },
            { new: true }
        );
        res.status(200).send(updatedpayment);
        console.log('Payment updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to delete a schedule by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await paymentModel.findByIdAndDelete(objectId);
        res.status(200).send('Report deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };