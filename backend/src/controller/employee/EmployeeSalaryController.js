import EmployeeSalaryModel from "../../models/employee/EmployeeSalaryModel.js";

//Create a function to create a new employee
export async function addEmployeeSalary(req, res) {
    const empId = req.body.id
    const basicSal = req.body.basicSal
    const otHours = req.body.otHours
    const otRate = req.body.otRate
    const otTotal = req.body.otTotal
    const bonus = req.body.bonus
    const totalSal = req.body.totalSal
    const month = req.body.month

    console.log(empId, basicSal, otHours, otRate, otTotal, bonus, totalSal, month)

    const employeeSalary = new EmployeeSalaryModel({
        empId: empId,
        basicSal: basicSal,
        otHours: otHours,
        otRate: otRate,
        otTotal: otTotal,
        bonus: bonus,
        totalSal: totalSal,
        month: month
    })

    try {
        await employeeSalary.save()
        console.log("successfully data inserted")
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}

// Create a function to read all employees' salary information
export async function getAllEmployeeSalary(req, res){
    
}