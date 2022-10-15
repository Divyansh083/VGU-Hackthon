const mongoose = require("mongoose");
let { productSchema } = require("./product.js");
let { orderSchema } = require("./orders.js");

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },

    useremail: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(re);
            },
            message: "please enter the valid email address",
        },
        sparse: true,
        index: true,
        unique: true,
    },

    userpassword: {
        type: String,
        trim: true,
        required: true,
    },

    userphone: {
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                if (value.length < 10) {
                    return false;
                } else return true;
            },
            message: "please enter a valid number",
        },
    },

    usertype: {
        type: String,
        trim: true,
        enum: ["indi", "org"],
        default: "indi",
        required: true,
    },

    usercart: [
        {
            product: productSchema,
            cart_quantity: {
                type: Number,
            },
        },
    ],

    address: {
        type: String,
        trim: true,
        default: "",
    },

    createdAt: {
        type: Date,
        required: true,
        default: null,
    },

    status: {
        type: String,
        enum: ["active", "pending"],
        default: "pending",
    },

    confirmationCode: {
        type: String,
        unique: true,
    },

    forgotPasswordCode: {
        type: String,
    },

    userOrders: [orderSchema],
});

// middleware

userSchema.pre("validate", function (next) {
    if (this.createdAt == null) {
        this.createdAt = Date.now();
    }
    next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
