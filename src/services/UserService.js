const User = require('../models/User.js')
const aqp = require('api-query-params');

const gUser = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;

            result = await User.find(filter).skip(offset).limit(limit).exec();
        } else {
            result = await User.find({});
        }
        return result;
    } catch (error) {
        return error;
    }
}

const cUser = async (data) => {
    try {
        let result = await User.create(data);
        return result;
    } catch (error) {
        return error;
    }
}

const uUser = async (data) => {
    try {
        console.log(data)
        let result = await User.updateOne({ _id: data._id }, {
            fullname: data.fullname,
            email: data.email,
            phone: data.phoneNumber,
            address: data.address,
            gender: data.gender
        });
        return result
    } catch (error) {
        return error;
    }
}

const dUser = async (id) => {
    try {
        let result = await User.deleteById(id);
        return result
    } catch (error) {
        return error;
    }
}

const loggedIn = async (data) => {
    try {
        return await User.find({ username: data.username, password: data.password });
    } catch (error) {
        return error
    }
}


module.exports = {
    gUser, cUser, uUser, dUser, loggedIn
}