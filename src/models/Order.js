const { default: mongoose } = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.ObjectId,
        ref: 'user'
    },
    address: String,
    note: String,
    phoneNumber: String,
    shippingCost: Number,
    totalPrice: Number,
    status: String,
    products: []
}, { timestamps: true });

const Order = mongoose.model('order', orderSchema);

module.exports = Order