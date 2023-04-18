import express from "express";
const SManagerrouter = express.Router;
import  {createOne, getAll, updateOne, deleteOne} from '../../controller/Supplements/SManagercontroller.js'

SManagerrouter.post('/SManager', createOne);

// get all SManager
SManagerrouter.get('/SManager', getAll);

// update a SManager by id
SManagerrouter.put('/SManager/:id', updateOne);

// delete a SManager by id
SManagerrouter.delete('/SManager/:id', deleteOne);





export default SManagerrouter; 