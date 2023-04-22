import Table from 'react-bootstrap/Table';
import { Button } from 'reactstrap';
import './RecivedOrder.css'

const RecivedOrder = () => {
    return(
        <div className="container-fluid">
            <div className="text-center">
                <div id='recived-orders-title'>Recived Orders</div>
            </div>
        <div className="container">
            {/*Create Boostrap table with Following Colums. Supplier, Project, Quantity, Size and Edit button, Delete button*/}
            <Table striped className="bg-light container">
                <thead>
                    <tr>
                        <th>Supplier</th>
                        <th>Project</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {/*Demo DATA*/}
                    <tr>
                        <td>Supplier 1</td>
                        <td>Project 1</td>
                        <td>100</td>
                        <td>10x10</td>
                        <td><Button color="primary">Edit</Button></td>
                        <td><Button color="danger">Delete</Button></td>
                    </tr>
                    {/*Demo DATA*/}

                    {/*Demo DATA*/}
                    <tr>
                        <td>Supplier 2</td>
                        <td>Project 2</td>
                        <td>200</td>
                        <td>20x20</td>
                        <td><Button color="primary">Edit</Button></td>
                        <td><Button color="danger">Delete</Button></td>
                    </tr>
                    {/*Demo DATA*/}
                </tbody>
            </Table>
        </div>
        </div>
    )
}

export default RecivedOrder