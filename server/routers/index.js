import express from 'express';
import { getAllData, postData, deleteData, updateData } from '../controller';

const router = express.Router();

router.get('/', getAllData);

router.post('/', postData);

router.delete('/:key/:fieldToSearch', deleteData);

router.put('/:key/:fieldToSearch/:fieldToUpdate', updateData);

export default router;
