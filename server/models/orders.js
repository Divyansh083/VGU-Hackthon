const mongoose = require("mongoose");
const { productSchema } = require("./product");

const orderSchema = mongoose.Schema({
    product: productSchema,

    ordered_quantity: {
        type: Number,
        required: true,
    },

    total_order_price: {
        type: Number,
        required: true,
    },

    user_address: {
        type: String,
        required: true,
        trim: true,
    },

    userId: {
        required: true,
        type: String,
    },

    orderedAt: {
        type: Date,
        required: true,
    },

    order_status: {
        type: Number,
        default: 0,
    },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order, orderSchema };
