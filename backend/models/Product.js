const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unque: true},

        desc: {
            type: String,
            required: true
        },

        img: {
            type: String,
            required: true},

            categories: {
                type: Array,
                required: false
            },

            size: {
                type: String,
                required: false
            },
          
            price: {
                type: Number,
                required: true
            },

        },
        {timestamps: true}
        );

module.exports = mongoose.model("User", ProductSchema);
