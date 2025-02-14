const Product = require("../model/productModel");

const getFilteredProducts = async (req, res) => {
    try {
        const { query, category } = req.query;
        let filter = {};

        if (query) {
            filter.name = { $regex: query, $options: "i" }; 
        }

        if (category && category !== "All") {
            filter.category = category;
        }

        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { getFilteredProducts };
