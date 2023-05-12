import express from "express";
const Supplementsrouter = express.Router;
import  {createOne, getAll, updateOne, deleteOne} from '../../controller/Supplements/Supplementcontroller.js'

Supplementsrouter.post('/Supplements', createOne);

// get all supplemnts
Supplementsrouter.get('/Supplements', getAll);

// update a supplemnts by id
Supplementsrouter.put('/Supplements/:id', updateOne);

// delete a supplemnts by id
Supplementsrouter.delete('/Supplements/:id', deleteOne);





export default Supplementsrouter; 