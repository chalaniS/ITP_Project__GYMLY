import express from "express";
const SupplementOrderrouter = express.Router;
import  {createOne, getAll, updateOne, deleteOne} from '../../controller/Supplements/SupplementOrdercontroller,js'

SupplementOrderrouter.post('/ SupplementOrder', createOne);

// get all SupplementOrder
SupplementOrderrouter.get('/ SupplementOrder', getAll);

// update a  SupplementOrder by id
SupplementOrderrouter.put('/ SupplementOrder/:id', updateOne);

// delete a  SupplementOrder by id
SupplementOrderrouter.delete('/ SupplementOrder/:id', deleteOne);





export default SupplementOrderrouter; 