import EmployeeModel from '../../models/employee/EmployeeModel.js';

// Create a function to create a new employee
export async function createOne(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const NIC = req.body.NIC
    const role = req.body.role
    const gender = req.body.gender
    const DOB = req.body.DOB
    const contactNo = req.body.contactNo
    const email = req.body.email
    const address = req.body.address
    const qualifications = req.body.qualifications
    const joinedDate = req.body.joinedDate
    const terminateDate = req.body.terminateDate

    console.log(firstName + lastName + NIC + role + gender + DOB + contactNo + email + address + qualifications + joinedDate + terminateDate)

    const employee = new EmployeeModel({

        userId: "45821463#23669546",
        firstName: firstName,
        lastName: lastName,
        NIC: NIC,
        role: role,
        gender: gender,
        DOB: DOB,
        contactNo: contactNo,
        email: email,
        address: address,
        qualifications: qualifications,
        joinedDate: joinedDate,
        terminateDate: terminateDate
    });

    try {
        await employee.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all employees
export async function getAll(req, res) {

    const userId = "45821463#23669546";

    try {
        const employee = await EmployeeModel.find({ userId });
        res.status(200).json(employee);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}


// Create a function to update an employee by id
export async function updateOne(req, res) {
    const objectId = req.params.id;
    const { firstName, 
            lastName, 
            NIC, 
            role, 
            gender, 
            DOB, 
            contactNo, 
            email, 
            address, 
            qualifications, 
            joinedDate, 
            terminateDate 
    } = req.body;

    try {
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
            objectId,
            {
                firstName: firstName,
                lastName: lastName,
                NIC: NIC,
                role: role,
                gender: gender,
                DOB: DOB,
                contactNo: contactNo,
                email: email,
                address: address,
                qualifications: qualifications,
                joinedDate: joinedDate,
                terminateDate: terminateDate
            },
            { new: true }
        );
        res.status(200).send(updatedEmployee);
        console.log('Employee details updated successfully');

    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}

// Create a function to remove an employee by id
export async function deleteOne(req, res) {
    const objectId = req.params.id;
    try {
        await EmployeeModel.findByIdAndDelete(objectId);
        res.status(200).send('Employee removed successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

// Export all the controller functions as an object
export default { createOne, getAll, updateOne, deleteOne };
