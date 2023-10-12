const express = require('express')
const routerAPI = express.Router()
const { postCreateUser, updateUser, deleteUser, getAllUser } = require('../controllers/userController');
const { getAllProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { getAllOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/OrderController');

routerAPI.get('/users', getAllUser)
routerAPI.post('/users', postCreateUser)
routerAPI.put('/users', updateUser)
routerAPI.delete('/users', deleteUser)

routerAPI.get('/products', getAllProduct)
routerAPI.post('/products', createProduct)
routerAPI.put('/products', updateProduct)
routerAPI.delete('/products', deleteProduct)

routerAPI.get('/orders', getAllOrder)
routerAPI.post('/orders', createOrder)
routerAPI.put('/orders', updateOrder)
routerAPI.delete('/orders', deleteOrder)

module.exports = routerAPI