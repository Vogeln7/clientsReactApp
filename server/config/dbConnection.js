import {mongoose} from 'mongoose'
import 'dotenv/config'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
    } catch (err) {
        console.log(err)
    }
}

export default connectDB;