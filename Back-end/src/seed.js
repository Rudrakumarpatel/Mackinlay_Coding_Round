const mongoose = require("mongoose");
const Product = require("./model/productModel");
const products = require("./data/data");
const connectDB = require("./config/db");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(products);
        console.log("Data Imported Successfully!");
        process.exit();
    } catch (error) {
        console.error("Error in Importing Data:", error);
        process.exit(1);
    }
};

importData();
