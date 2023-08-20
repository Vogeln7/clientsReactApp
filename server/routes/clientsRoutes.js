import express from 'express';
import {createClient, getAllClients, updateClientById, findClientById, deleteClientById, filterByDni} from '../controllers/clientsController.js';

export const router = express.Router();


router.post('/new', createClient);

router.get('/all', getAllClients);

router.get('/one/:id', findClientById );

router.get('/filter/:dni', filterByDni);

router.put('/update/:id', updateClientById);

router.delete('/delete/:id', deleteClientById);