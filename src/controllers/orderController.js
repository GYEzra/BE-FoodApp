const { gOrder, cOrder, uOrder, dOrder } = require('../services/OrderService.js')

const getAllOrder = async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;

    if (limit && page) {
        result = await gOrder(limit, page, req.query);
    } else {
        result = await gOrder();
    }

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const createOrder = async (req, res) => {
    let result = await cOrder(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const updateOrder = async (req, res) => {
    let result = await uOrder(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const deleteOrder = async (req, res) => {
    let result = await dOrder(req.body.id);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

module.exports = { getAllOrder, createOrder, updateOrder, deleteOrder }