const Order = require('../models/Order.js');
const aqp = require('api-query-params');
const { uProduct } = require('../services/ProductService.js')

const getAll = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page || queryString) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;

            result = await Order.find(filter)
                .skip(offset)
                .limit(limit)
                .populate(['userId', 'cart.product'])
                .exec();
            console.log(result)
        } else {
            result = await Order.find({}).populate(['userId', 'cart.product']);
        }
        return result;
    } catch (error) {
        console.log(error)
        return error;
    }
}

const get = async (_id) => {
    return await Order.findOne({ _id }).populate(['userId', 'cart.product']);
}

const create = async (data) => {
    let result = null;
    try {
        let cart = data.cart;
        processQuantityStock(cart);
        result = await Order.create({ ...data });
    } catch (error) {
        console.log(error);
    }
    return result;
}

const update = async (data) => {
    try {
        return await Order.updateOne({ _id: data._id }, { ...data });
    } catch (error) {
        return null;
    }
}

const remove = async (id) => {
    try {
        let result = await Order.deleteById(id);
        return result
    } catch (error) {
        return null;
    }
}

const processQuantityStock = async (cart) => {
    for (let i = 0; i < cart.length; i++) {
        let cartItem = cart[i];
        cartItem.product.quantity -= cartItem.quantity;
        await uProduct(cartItem.product);
    }
}
module.exports = {
    getAll, get, update, remove, create
}