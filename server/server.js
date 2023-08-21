import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/dbConnection.js';
import {router as clientsRoutes} from './routes/clientsRoutes.js';
const app = express();
const PORT=process.env.SERVER_PORT;
//Use
app.use(express.json());
app.use(cors());
app.use('/clients',clientsRoutes);

connectDB();

app.listen(PORT,()=>{
    console.log(`Running on port: ${PORT}`);
})