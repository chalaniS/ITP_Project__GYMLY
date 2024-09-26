import EmployeeLeaveModel from "../../models/employee/EmployeeLeaveModel";

//Create a function to add new employee leave
export async function addEmployeeLeave(req, res){
    const userId = "45821463#23669546"
    const firstName = req.body.firstName
    const role = req.body.role
    const leaveType = req.body.leaveType
    const leaveFrom = req.body.leaveFrom
    const leaveTo = req.body.leaveTo
    const leaveStatus = req.body.leaveStatus

    console.log(userId, firstName, role, leaveType, leaveFrom, leaveTo, leaveStatus)

    const employeeLeave = new EmployeeLeaveModel({
        
        userId : userId,
        firstName : firstName, 
        role : role, 
        leaveType : leaveType, 
        leaveFrom : leaveFrom, 
        leaveTo : leaveTo,
        leaveStatus : leaveStatus
    })

    
    try {
        await employeeLeave.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all employee leaves
export async function getAllEmployeeLeave(req, res) {

    const userId = "45821463#23669546";

    try {
        const employeeLeave = await EmployeeLeaveModel.find({ userId });
        res.status(200).json(employeeLeave);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}

// Create a function to read a single employee's leave by id
export async function getEmployeeLeave(req, res) {
    try {
        const employeeLeave = await EmployeeLeaveModel.findById(req.params.id);
        console.log('Employee leave read successfully for update');
        res.status(200).json(employeeLeave);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}

// Create a function to remove an employee leave by id
export async function deleteEmployeeLeave(req, res) {
    const objectId = req.params.id;
    try {
        await EmployeeLeaveModel.findByIdAndDelete(objectId);
        res.status(200).send('Employee leave removed successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while deleting data');
    }
}

//Export all the controller functions as an object
export default { addEmployeeLeave, getAllEmployeeLeave, getEmployeeLeave, deleteEmployeeLeave};