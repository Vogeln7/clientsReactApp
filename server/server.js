import express from 'express';
import 'dotenv/config'
import connectDB from './config/dbConnection.js';
import {router as clientsRoutes} from './routes/clientsRoutes.js';
const app = express();

//Use
app.use(express.json());
//app.use(cors());
connectDB();
const PORT=process.env.SERVER_PORT;

app.use('/clients',clientsRoutes);


app.listen(PORT,()=>{
    console.log(`Running on port: ${PORT}`);
})