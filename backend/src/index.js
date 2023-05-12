import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
//import EmployeeModel from './models/employee/EmployeeModel.js'
import EmployeeRouter from './routes/employee/EmployeeRouter.js'
import EmployeeSalaryRouter from './routes/employee/EmployeeSalaryRouter.js'
// import EmployeeLeaveRouter from './routes/employee/EmployeeLeaveRouter.js'
//import EmployeeSalaryModel from './models/employee/EmployeeSalaryModel.js'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let database;

app.listen(PORT, () => {

    // Start the server
    console.log(`Server started on port ${PORT}`)

    //connect db
    mongoose
        .connect("mongodb+srv://gymly:gymly123@gymly-db-cluster.sfmuyh9.mongodb.net/gymly-db?retryWrites=true&w=majority")
        .then((connection) => {
            database = connection;
            console.log("Database Synced");
        })
        .catch((err) => {
            console.log(err.message);
        });
});

//connect with frontend
app.get("/getData", (req, res) => {
    res.send("Hello I'm from backend");
});


//throw API to EmployeeRouter class
app.use('/employee', EmployeeRouter);

//throw API to EmployeeSalaryRouter class
app.use('/employeeSalary', EmployeeSalaryRouter);

//throw API to EmployeeLeaveRouter class
// app.use('/employeeLeave', EmployeeLeaveRouter);

// app.post("/employee", async (req, res) => {

//     const firstName = req.body.firstName
//     const lastName = req.body.lastName
//     const NIC = req.body.NIC
//     const role = req.body.role
//     const gender = req.body.gender
//     const DOB = req.body.DOB
//     const contactNo = req.body.contactNo
//     const email = req.body.email
//     const address = req.body.address
//     const qualifications = req.body.qualifications
//     const joinedDate = req.body.joinedDate
//     const terminateDate = req.body.terminateDate

//     console.log(firstName + lastName + NIC + role + gender + DOB + contactNo + email + address + qualifications + joinedDate + terminateDate)

//     const employee = new EmployeeModel({

//         userId: "45821463#23669546",
//         firstName: firstName,
//         lastName: lastName,
//         NIC: NIC,
//         role: role,
//         gender: gender,
//         DOB: DOB,
//         contactNo: contactNo,
//         email: email,
//         address: address,
//         qualifications: qualifications,
//         joinedDate: joinedDate,
//         terminateDate: terminateDate
//     });

//     try {
//         await employee.save()
//         console.log("successfully data inserted")
//         res.status(200).send("Data inserted successfully");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Error occurred while inserting data");
//     }
// });

// app.get("/employee", async (req, res) => {

//     const userId = "45821463#23669546";

//     try {
//         const employee = await EmployeeModel.find({ userId });
//         console.log("'Employee read successfully'");
//         res.status(200).json(employee);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while retrieving data');
//     }

// });

// // read a single employee by id for update
// app.get('/employee/:id', async (req, res) => {
//     try {
//         const employee = await EmployeeModel.findById(req.params.id);
//         console.log('Employee read successfully for update');
//         res.status(200).json(employee);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error occurred while retrieving data');
//     }
// });


// app.put("/employee/:id", async (req, res) => {
//     const objectId = req.params.id;
//     const { firstName, 
//             lastName, 
//             NIC, 
//             role, 
//             gender, 
//             DOB, 
//             contactNo, 
//             email, 
//             address, 
//             qualifications, 
//             joinedDate, 
//             terminateDate 
//     } = req.body;
//     try {
//         const updatedEmployee = await EmployeeModel.findByIdAndUpdate(
//             objectId,
//             {
//                 firstName: firstName,
//                 lastName: lastName,
//                 NIC: NIC,
//                 role: role,
//                 gender: gender,
//                 DOB: DOB,
//                 contactNo: contactNo,
//                 email: email,
//                 address: address,
//                 qualifications: qualifications,
//                 joinedDate: joinedDate,
//                 terminateDate: terminateDate
//             },
//             { new: true }
//         );
//         res.status(200).send(updatedEmployee);
//         console.log('Employee updated successfully');

//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while updating data');
//     }
// });


// app.delete("/employee/:id", async (req, res) => {
//     const objectId = req.params.id;
//     try {
//         await EmployeeModel.findByIdAndDelete(objectId);
//         console.log("'Employee deleted successfully'");
//         res.status(200).send('Employee deleted successfully');
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while deleting data');
//     }
// });



// app.post("/employeeSalary", async (req, res) => {

//     const empId = req.body.id
//     const basicSal = req.body.basicSal
//     const otHours = req.body.otHours
//     const otRate = req.body.otTotal
//     const bonus = req.body.totalSal
//     const month = req.body.month

//     console.log(empId + basicSal + otHours + otRate + bonus + month)

//     const employeeSalary = new EmployeeSalaryModel({

//         empId: empId,
//         basicSal: basicSal,
//         otHours: otHours,
//         otRate: otRate,
//         bonus: bonus,
//         month: month
//     });

//     try {
//         await employee.save()
//         console.log("successfully data inserted")
//         res.status(200).send("Data inserted successfully");
//     } catch (err) {
//         console.log(err);
//         res.status(500).send("Error occurred while inserting data");
//     }
// });

// // read a single employee's salary by id for update
// app.get('/employeeSalary/:id', async (req, res) => {
//     try {
//         const employeeSalary = await EmployeeSalaryModel.findById(req.params.id);
//         console.log('Employee\'s Salary read successfully for update');
//         res.status(200).json(employeeSalary);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Error occurred while retrieving data');
//     }
// });


// app.put("/employeeSalary/:id", async (req, res) => {
//     const objectId = req.params.id;
//     const { empId,
//             basicSal,
//             otHours,
//             otRate,
//             bonus,
//             month 
//     } = req.body;
//     try {
//         const updatedEmployeeSalary = await EmployeeSalaryModel.findByIdAndUpdate(
//             objectId,
//             {
//                 empId: empId,
//                 basicSal: basicSal,
//                 otHours: otHours,
//                 otRate: otRate,
//                 bonus: bonus,
//                 month: month
//             },
//             { new: true }
//         );
//         res.status(200).send(updatedEmployeeSalary);
//         console.log('Employee\'s Salary updated successfully');

//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Error occurred while updating data');
//     }
// });