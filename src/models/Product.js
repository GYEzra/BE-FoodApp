const { default: mongoose } = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    categories: {
        type: mongoose.ObjectId,
        ref: 'category',
    },
    description: {
        type: String
    }
}, { timestamps: true });
const Product = mongoose.model('product', productSchema);

module.exports = Product