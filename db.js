const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongo = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error("MONGO_URI is not defined in the environment variables");
        }

        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", err.message);
        console.error("Stack trace:", err.stack);
    }
}

module.exports = connectToMongo