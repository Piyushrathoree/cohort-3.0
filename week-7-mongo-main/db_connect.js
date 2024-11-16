import mongoose from "mongoose";
const DB_NAME="mongo"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://piyushrathore:65R8iKFD8KNdWgEk@cluster0.63txi.mongodb.net//${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

  export default connectDB