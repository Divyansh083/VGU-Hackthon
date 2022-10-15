const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
    },

    product_name: {
        required: true,
        type: String,
        trim: true,
    },

    product_images: [
        {
            required: true,
            type: String,
        },
    ],

    product_category: {
        required: true,
        type: String,
        trim: true,
    },

    product_available_quantity: {
        required: true,
        type: Number,
    },

    product_description: {
        required: true,
        type: String,
        trim: true,
    },

    favourable_envi: [{
        type: String,
        trim: true,
    }],
    unfavourable_envi: [{
        type: String,
        trim: true,
    }],

    product_rating: [
        {
            user_id: {
                type: String,
                required: true,
            },

            rating: {
                type: Number,
                required: true,
            },
        },
    ],

    product_price: {
        required: true,
        type: Number,
    },

    product_created_At: {
        type: Date,

        default: null,
    },

    product_updated_At: {
        type: Date,

        default: null,
    },
});

// middleware

productSchema.pre("validate", function (next) {
    if (this.product_created_At == null) {
        this.product_created_At = Date.now();
    }

    this.product_updated_At = Date.now();

    next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product, productSchema };
