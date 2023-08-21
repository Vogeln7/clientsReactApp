import Client from "../models/Client.js"


export const getAllClients = async (req,res)=>{
    //get all clients
    const clients= await Client.find()
    if (!clients?.length){
        return res.status(400).json({message:'no clients found'})
    }
    res.json(clients)
}

export const createClient = async (req,res)=>{
   try {
    const newClient=req.body;
    const clientAlreadyExist=await Client.exists({dni:newClient.dni})
    if (clientAlreadyExist){
        res.status(409).json({message:`User with Dni: ${newClient.dni} already exist`})
    }else{
        const clientCreated= await Client.create(newClient)
        res.json(clientCreated)
    }
    
   } catch (error) {
    res.json({message:error})
   }        
    
}

export const updateClientById = async (req,res)=>{
    try {
     const clientId=req.params.id;
     const dataToUpdate=req.body
     const clientUpdated= await Client.findOneAndUpdate({_id:clientId}, {...dataToUpdate},{returnDocument:'after'})
     res.json({message:`The client with the ID: ${clientId} has been updated seccesfylly`,
    clientUpdated})
    } catch (error) {
     res.json({message:error})
    }       
     
 }

 export const findClientById = async (req,res)=>{
    try {
     const clientId=req.params.id;
     const clientFound= await Client.findById(clientId)
     res.json(clientFound)
    } catch (error) {
     res.json({message:error})
    }        
     
 }

 export const deleteClientById = async (req,res)=>{
    try {
     const clientId=req.params.id;
     const clientDeleted= await Client.deleteOne({_id:clientId})
     if (clientDeleted.deletedCount===1){
        res.json({message:`The client with Id:${clientId} has been deleted succesfully`})
     }else{
        res.status(404).json({message:`Client with id : ${clientId} doesn't exist`})
     }
     
    } catch (error) {
     res.json({message:error})
    }        
     
 }

 export const filterByDni = async (req,res)=>{
    try {
         const clientDni=req.params.dni;
         
        
         const stringDni=clientDni.toString()
        
         const regex=new RegExp(stringDni,"i")
           
        const clientsFiltereds= await Client.find({dni:{$regex:regex}});
        
        
        res.json(clientsFiltereds);
    } catch (error) {
        res.json(error)
    }
 }