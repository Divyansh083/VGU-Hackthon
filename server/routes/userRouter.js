const express = require("express");
const userRouter = express.Router();
const { Product } = require("../models/product");
const User = require("../models/user");
const auth = require("../middleware/user");
const { Order } = require("../models/orders");



userRouter.post("/user/add-to-cart", auth, async (req, res) => {
    try {
        const product_id = req.body.id;
        let product = await Product.findById(product_id);

        console.log("request for add to cart" + req.body.id);

        let user = await User.findById(req.user); //find the user jiski cart me add krna h
        console.log("user: " + user);

        if (user.usercart.length === 0) {
            user.usercart.push({ product, cart_quantity: 1 });
        } else {
            let isProductFound = false;
            for (let i = 0; i < user.usercart.length; i++) {
                if (user.usercart[i].product._id.equals(product_id)) {
                    isProductFound = true;
                }
            }

            if (isProductFound === true) {
                let prod = user.usercart.find((productt) =>
                    productt.product._id.equals(product_id)
                );

                prod.cart_quantity += 1;
            } else {
                user.usercart.push({ product, cart_quantity: 1 });
            }
        }

        console.log("success");

        user = await user.save();
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});


userRouter.delete("/user/remove-from-cart/:id", auth, async (req, res) => {
    try {
        const product_id = req.params.id;
        let product = await Product.findById(product_id);
        const user_id = req.user;
        let user = await User.findById(user_id);

        for (let i = 0; i < user.usercart.length; i++) {
            if (user.usercart[i].product._id.equals(product_id)) {
                if (user.usercart[i].cart_quantity === 1) {
                    user.usercart.splice(i, 1);
                } else {
                    user.usercart[i].cart_quantity -= 1;
                }

                break;
            }
        }

        user = await user.save();
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

userRouter.get("/user/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});



userRouter.get("/user/products", auth, async (req, res) => {
    try {
        console.log(req.query.category);

        const products = await Product.find({
            product_category: req.query.category,
        });

        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});



userRouter.post("/user/order", auth, async (req, res) => {
    try {
        const user_address = req.body.address;
        const cart_product_id = req.body.cart_product_id;
        let user = await User.findById(req.user);

        let cart_i;
        let totalPrice = 0;

        for (let i = 0; i < user.usercart.length; i++) {
            if (user.usercart[i]._id.equals(cart_product_id)){
                cart_i = user.usercart[i];

                if (
                    user.usercart[i].product.product_available_quantity >=
                    user.usercart[i].cart_quantity
                ) {
                    user.usercart.splice(i, 1);
                    user = await user.save();
                }

                break;
            }
        }

        totalPrice += cart_i.product.product_price * cart_i.cart_quantity;

        let product = await Product.findById(cart_i.product._id);
        console.log("product : ", product);

        product.product_available_quantity -= cart_i.cart_quantity;
        await product.save();

        const userID = cart_i.product.userID;

        const seller = await User.findById(userID);

        seller.userorders.push({
            product: cart_i.product,
            total_order_price: totalPrice,
            user_address,
            userId: req.user,
            ordered_quantity: cart_i.cart_quantity,
            orderedAt: Date.now(),
        });

        await seller.save();

        res.status(200).json({ message: "order placed" });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

module.exports = userRouter;