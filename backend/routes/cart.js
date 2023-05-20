const express = require('express');
const { verifyTokenAndAuthorization, verifyToken, verifyTokenAndAdmin } = require('./verifyToken');
const  cart = require('../models/cart'); // Import the cart model

const router = express.Router();

// Create
router.post("/", verifyTokenAndAuthorization, async (req, res) => {
    const newCart = new cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedCart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...");
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// Get User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//Get All Products
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await cart.find();
        res.status(200).json(carts);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
