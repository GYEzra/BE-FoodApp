const Product = require('../models/Product.js')
const aqp = require('api-query-params');

const gProduct = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;

            result = await Product.find(filter).skip(offset).limit(limit).exec();
        } else {
            result = await Product.find({});
        }
        return result;
    } catch (error) {
        return error;
    }
}

const cProduct = async (data) => {
    try {
        let result = await Product.create(data);
        return result;
    } catch (error) {
        return error;
    }
}

const uProduct = async (data) => {
    try {
        let result = await Product.updateOne({ _id: data.id }, { ...data });
        return result
    } catch (error) {
        return error;
    }
}

const dProduct = async (id) => {
    try {
        let result = await Product.deleteById(id);
        return result
    } catch (error) {
        return error;
    }
}

module.exports = {
    gProduct, cProduct, uProduct, dProduct
}