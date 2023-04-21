import React, { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import Search from "../../../Components/Search/Search";
import '../Style/ManagerDashboard.css'
import axios from 'axios';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import logo from '../../../images/logo.png'

const ManagerDashboard = () => {

    const [userData, setUserData] = useState(null)

    {/* Fetching Data to page  */}
    useEffect(() => {
        const fetchWorkouts = async () => {
            {/* get workouts throgh the API and save to res variable*/}
            const res = await fetch('/users')
            const json = await res.json()
            
            if(res.ok){
                setUserData(json)
            }
        }

        fetchWorkouts()
    }, []);
    {/* Fetching Data to page  */}


    {/* Delete user */}
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5001/users/${id}`)
            .then(response => {

                console.log('Schedule deleted successfully');
                // Refresh the table to show updated data
                window.alert('Data has been deleted successfully');
                window.location.reload();

            })
            .catch(error => {

                console.log('Error deleting schedule:', error);

            });
    }
    {/* end of Delete user */}


    {/* Generate user report */}
    const generateUserReport = () => {
        const doc = new jsPDF()
             
        {/* Add title and font style to pdf */}
        doc.setFontSize(30)
        doc.setFont('helvetica', 'bold')
        {/* Font color is blue*/}
        doc.setTextColor(0, 0, 255)

        doc.text('User Report', 105, 10, 'center')
        

        {/* table data */}
        autoTable(
            doc,
            {
                head:rtitle,
                body:rbody
            },40,100
        )
        {/* table style */}

        {/* table data */}

        {/* Save Table */}
        doc.save('UserReport.pdf')
        }

        {/* table title */}
        var rtitle = [['Name', 'Email', 'Gender', 'Phone']]

        {/* table body */}
        var rbody = userData && userData.map((users) => (
            [users.Name, users.Email, users.Gender, users.Phone]
        ))
    {/* Generate user report */}

    
    return(
    <div className="container-fluid" id="ManagerDashboard">

        <div className="text-center" id="ManagerDashboard-Title">All Users</div>


        <div className="row">
            <div className="col-6">    
                <div className="container content-justify-center text-center" id="ManagerDashboard-search">
                    <Search />
                </div>
            </div>

            <div className="col-6">
                {/*Create div with button to genarate user report*/}
                <div className="container text-center" id="ManagerDashboard-user-report">
                    <button className="btn btn-primary" id="user-report-btn" onClick={generateUserReport}>Generate User Report</button>
                </div>
            </div>
        </div>


          <div className="container-fluid" id="ManagerDashboard-users-table">
                <Table striped className="bg-light container">

                    {/*Header of table*/}
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>  
                        <th>Email</th>
                        <th>Package</th>
                        <th>Gender</th>
                        <th></th>
                        </tr>
                    </thead>

                    {/*Body of table*/}  
                    <tbody>
                        {userData && userData.map((users) => (
                            <tr key={users.userId}>
                                <td>{users.userId}</td>
                                <td>{users.Name}</td>
                                <td>{users.Email}</td>
                                <td>Basic</td>
                                <td>{users.Gender}</td>
                                <td><button className="btn btn-primary" id="delete-user-btn" onClick={() => handleDelete(users._id)}>delete</button></td>
                            </
tr>
                        ))}
                        </tbody>  

                </Table>

          </div>

          {/*Create div with button to genarate user report
            <div className="container text-center" id="ManagerDashboard-user-report">
                <button className="btn btn-primary" id="user-report-btn">Generate User Report</button>
            </div>  */}

    </div>
    );
}
 
export default ManagerDashboard;