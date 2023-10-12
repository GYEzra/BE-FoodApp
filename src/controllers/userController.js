const { query } = require('express');
const { gUser, cUser, uUser, dUser } = require('../services/UserService')

const getAllUser = async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let result = null;

    if (limit && page) {
        result = await gUser(limit, page, req.query);
    } else {
        result = await gUser();
    }

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const postCreateUser = async (req, res) => {
    let result = await cUser(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const updateUser = async (req, res) => {
    let result = await uUser(req.body);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

const deleteUser = async (req, res) => {
    let result = await dUser(req.body.id);

    return res.status(200).json(
        {
            EC: 0,
            data: result
        }
    )
}

module.exports = {
    postCreateUser, updateUser, deleteUser, getAllUser
}