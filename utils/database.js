import mongoose from 'mongoose';
let isConnected = false;
export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true );
    if (isConnected) {
        console.log("Database is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            dbName: process.env.MONGO_DB_NAME,
        });
        isConnected = true;
        console.log('MongoDB Connected');
    } catch (error) {
        console .log(error);
    }
}