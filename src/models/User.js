const { default: mongoose } = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    email: String,
    phone: String,
    address: String,
    gender: String,
}, { timestamps: true });

userSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const User = mongoose.model('user', userSchema);

module.exports = User