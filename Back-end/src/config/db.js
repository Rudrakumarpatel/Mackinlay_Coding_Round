const mongoose = require("mongoose");
const connectDB = async () => {
    const mongoURI = "mongodb://127.0.0.1:27017/ecommerce";
    if (!mongoURI) {
        console.error("MONGO_URI is not defined.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
