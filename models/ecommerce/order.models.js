import mongoose from "mongoose";

// no need to export this schema as it is used in this file
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
        // you can create an array of objects instead creating a new schema
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: [
            "PENDING",
            "CANCELLED",
            "DELIVERED"
        ],
        default: "PENDING"
    }
}, {
    timestamps: true
});

export const Order = mongoose.model("Order", orderSchema);