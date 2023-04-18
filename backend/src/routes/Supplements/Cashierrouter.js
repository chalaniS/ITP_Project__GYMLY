import express from "express";
const Cashierrouter = express.Router;
import  {createOne, getAll, updateOne, deleteOne} from '../../controller/Supplements/Cashiercontroller.js'

Cashierrouter.post('/Cashier', createOne);

// get all Cashier
Cashierrouter.get('/Cashier', getAll);

// update a Cashier by id
Cashierrouter.put('/Cashier/:id', updateOne);

// delete a Cashier by id
Cashierrouter.delete('/Cashier/:id', deleteOne);





export default Cashierrouter; 