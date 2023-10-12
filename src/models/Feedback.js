const { default: mongoose } = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    product: {
        type: mongoose.ObjectId,
        ref: 'product'
    },
    user: {
        type: mongoose.ObjectId,
        ref: 'user'
    },
    score: {
        type: Number,
        required: true
    },
    note: String
}, { timestamps: true });

const Order = mongoose.model('feedback', feedbackSchema);

module.exports = Order