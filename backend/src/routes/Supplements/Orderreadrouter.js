import express from "express";
const Orderreadrouter = express.Router;
import  {createOne, getAll, updateOne, deleteOne} from '../../controller/Supplements/Supplementcontroller.js'

Orderreadrouter.post('/Orderread', createOne);

// get all supplemnts
Orderreadrouter.get('/Orderread', getAll);

// update a supplemnts by id
Orderreadrouter.put('/Orderread/:id', updateOne);

// delete a supplemnts by id
Orderreadrouter.delete('/Orderread/:id', deleteOne);





export default Orderreadrouter; 