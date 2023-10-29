const { default: mongoose } = require('mongoose')
const mongoose_delete = require('mongoose-delete');

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

feedbackSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Order = mongoose.model('feedback', feedbackSchema);

module.exports = Order