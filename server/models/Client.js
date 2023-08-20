import {mongoose} from 'mongoose'

const clientSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: [true, 'Client DNI number required']            
    },
    sex: {
        type: String        
    },
    phoneNumber: {
        type: String    
    }
})
const Client = mongoose.model('Client', clientSchema)
export default Client; 
