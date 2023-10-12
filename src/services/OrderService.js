const Order = require('../models/Order.js');
const aqp = require('api-query-params');

const gOrder = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;

            result = await Order.find(filter).skip(offset).limit(limit).exec();
        } else {
            result = await Order.find({});
        }
        return result;
    } catch (error) {
        return error;
    }
}

const cOrder = async (data) => {
    try {
        let result = await Order.create(data);
        return result;
    } catch (error) {
        return error;
    }
}

const uOrder = async (data) => {
    try {
        let result = await Order.updateOne({ _id: data.id }, { ...data });
        return result
    } catch (error) {
        return error;
    }
}

const dOrder = async (id) => {
    try {
        let result = await Order.deleteById(id);
        return result
    } catch (error) {
        return error;
    }
}

module.exports = {
    gOrder, cOrder, uOrder, dOrder
}