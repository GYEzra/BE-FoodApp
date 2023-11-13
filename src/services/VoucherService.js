const Voucher = require('../models/Voucher.js')
const aqp = require('api-query-params');

const gVouchers = async (limit, page, queryString) => {
    try {
        let result = null;
        if (limit && page || queryString) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(queryString);
            delete filter.page;

            result = await Voucher.find(filter)
                .skip(offset)
                .limit(limit)
                .exec();
        } else {
            result = await Voucher.find({});
        }
        return result;
    } catch (error) {
        return error;
    }
}

const gVoucher = async (id) => {
    try {
        let result = await Voucher.findOne({ _id: id })
        return result;
    } catch (error) {
        return error;
    }
}

const cVoucher = async (data) => {
    try {
        let result = await Voucher.create(data);
        return result;
    } catch (error) {
        return error;
    }
}

const uVoucher = async (data) => {
    try {
        let result = await Voucher.updateOne({ _id: data._id }, { ...data });
        return result
    } catch (error) {
        return error;
    }
}

const dVoucher = async (id) => {
    try {
        let result = await Voucher.deleteById(id);
        return result
    } catch (error) {
        return error;
    }
}

module.exports = {
    gVoucher, cVoucher, uVoucher, dVoucher, gVouchers
}