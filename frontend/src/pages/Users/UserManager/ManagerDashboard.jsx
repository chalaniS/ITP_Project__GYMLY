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

    /* Fetching Data to page */
    useEffect(() => {
        const fetchWorkouts = async () => {
            /* get workouts through the API and save to res variable*/
            
            const res = await fetch('/users')
            const json = await res.json()
            
            if(res.ok){
                setUserData(json)
            }
        }

        fetchWorkouts()
    }, []);

/* Delete user */
const handleDelete = async (id) => {
    try{
      fetch(`/users/${id}`, { method: 'DELETE' })
      alert('User successfully deleted!')
      window.location.reload()
    }
    catch(err){
        console.log(err)
        window.alert('Error deleting user!')
    }
}
/* end of Delete user */



    /* Generate user report */
    const generateUserReport = () => {
        const doc = new jsPDF()
             
        /* Add title and font style to pdf */
        doc.setFontSize(30)
        doc.setFont('helvetica', 'bold')
        /* Font color is blue*/
        doc.setTextColor(0, 0, 255)

        doc.text('User Report', 105, 10, 'center')
        

        /* table data */
        autoTable(
            doc,
            {
                head:rtitle,
                body:rbody
            },40,100
        )
        /* table style */

        /* Save Table */
        doc.save('UserReport.pdf')
    }

    /* table title */
    var rtitle = [['Name', 'Email', 'Package', 'Phone','Address']]

    /* table body */
    var rbody = userData && userData.map((users) => (
        [users.Name, users.Email, 'Basic', users.Phone, users.Address]
    ))
    /* End of Generate user report */

    /* Function to search user */
    const searchUser = (e) => {
        const search = e.target.value
        const filteredUsers = userData.filter((user) => {
            return user.Name.toLowerCase().includes(search.toLowerCase())
        })
        setUserData(filteredUsers)
    }

    return (
        <div className="container-fluid" id="ManagerDashboard">

            <div className="text-center" value="search" id="ManagerDashboard-Title">All Users</div>

            <div className="row">
                <div className="col-6">    
                    <div className="container content-justify-center text-center" id="ManagerDashboard-search">
                        <Search searchUser={searchUser} />
                    </div>
                </div>

                <div className="col-6">
                    {/*Create div with button to generate user report*/}
                    <div className="container text-center" id="ManagerDashboard-user-report">
                        <button className="btn btn-primary" id="user-report-btn" onClick={generateUserReport}>Generate User Report</button>
                    </div>
                </div>
            </div>

            {/*Create div with table to show all users*/}
            <div className="container-fluid" id="ManagerDashboard-users-table">

                <Table striped className="bg-light container">

                    {/*Header of table*/}
                    <thead>
                        <tr>
                        <th>Name</th>  
                        <th>Email</th>
                        <th>Package</th>
                        <th>Phone Number</th>
                        <th></th>
                        </tr>
                    </thead>

                    {/*Body of table*/}  
                    <tbody>
                        {userData && userData.map((users) => (
                            <tr key={users.userId}>
                                <td>{users.Name}</td>
                                <td>{users.Email}</td>
                                <td>Basic</td>
                                <td>0{users.Phone}</td>
                                <td><button className="btn btn-primary" id="delete-user-btn" onClick={() => handleDelete(users._id)}>delete</button></td>
                            </tr>
                        ))}
                        </tbody>  

                </Table>

          </div>
        {/*Create div with table to show all users*/}

        <div className="row">
            <div className="col-6">
            
            </div>
            <div className="col-6">
            
            </div>
        </div>

          {/*Create div with button to genarate user report
            <div className="container text-center" id="ManagerDashboard-user-report">
                <button className="btn btn-primary" id="user-report-btn">Generate User Report</button>
            </div>  */}

    </div>
    );
}
 
export default ManagerDashboard;