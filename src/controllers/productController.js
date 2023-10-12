const Product = require('../models/Product.js')
const { gProduct, cProduct, uProduct, dProduct } = require('../services/ProductService.js')


const getAllProduct = async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;

    if (limit && page) {
        result = await gProduct(limit, page, req.query);
    } else {
        result = await gProduct();
    }

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const createProduct = async (req, res) => {
    let result = await cProduct(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const updateProduct = async (req, res) => {
    let result = await uProduct(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const deleteProduct = async (req, res) => {
    let result = await dProduct(req.body.id);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}


module.exports = {
    getAllProduct, createProduct, updateProduct, deleteProduct
}