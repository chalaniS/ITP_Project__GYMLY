import React from "react"
import Table from 'react-bootstrap/Table';
import Search from "../../../Components/Search/Search";
import '../Style/ManagerDashboard.css'

const ManagerDashboard = () => {
    return(
    <div className="container-fluid" id="ManagerDashboard">

        <div className="text-center" id="ManagerDashboard-Title">All Users</div>
       
        {/*Search bar*/}
        <div className="container content-justify-center text-center" id="ManagerDashboard-search">
            <Search />
        </div>

          <div className="container" id="ManagerDashboard-users-table">
                <Table striped className="bg-light">

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
                        {/*Demo User 1*/}
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>John@a.lk</td>
                            <td>Basic</td>
                            <td>Male</td>
                            <td><button className="btn btn-primary" id="delete-user-btn">Delete</button></td>
                        </tr>
                        
                        {/*Demo User 2*/}
                        <tr>
                            <td>2</td>
                            <td>Peter Parker</td>
                            <td>peter@shild.us</td>
                            <td>Premium</td>
                            <td>Male</td>
                            <td><button className="btn btn-primary" id="delete-user-btn">Delete</button></td>
                        </tr>

                        {/*Demo User 3*/}
                        <tr>
                            <td>3</td>
                            <td>Steve Rogers</td>
                            <td>Steve@shild.us</td>
                            <td>Basic</td>
                            <td>Male</td>
                            <td><button className="btn btn-primary" id="delete-user-btn">Delete</button></td>
                        </tr>

                        {/*Demo User 4*/}
                        <tr>
                            <td>4</td>
                            <td>Clark Kent</td>
                            <td>kent@dc.com</td>
                            <td>Gold</td>
                            <td>Male</td>
                            <td><button className="btn btn-primary" id="delete-user-btn">Delete</button></td>
                        </tr>

                        {/*Demo User 5*/}
                        <tr>
                            <td>5</td>
                            <td>Barry Allen</td>
                            <td>flash@dc.com</td>
                            <td>Basic</td>
                            <td>Male</td>
                            <td><button className="btn btn-primary" id="delete-user-btn">Delete</button></td>
                        </tr>
                    </tbody>    

                </Table>

          </div>

          {/*Create div with button to genarate user report*/}
            <div className="container text-center" id="ManagerDashboard-user-report">
                <button className="btn btn-primary" id="user-report-btn">Generate User Report</button>
            </div>  

    </div>
    );
}
 
export default ManagerDashboard;