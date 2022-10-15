const express = require("express");
const productRouter = express.Router();
const { Product } = require("../models/product");
const auth = require("../middleware/user");

// searching for product
productRouter.get("/api/products/search/:name", auth, async (req, res) => {
    try {
        const products = await Product.find({
            product_name: { $regex: req.params.name, $options: "i" },
        });
        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = productRouter;
