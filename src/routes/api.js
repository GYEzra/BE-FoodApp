const express = require('express')
const routerAPI = express.Router()
const { postCreateUser, updateUser, deleteUser, getAllUser } = require('../controllers/userController');
const { getAllProduct, createProduct, updateProduct, deleteProduct, getProduct } = require('../controllers/productController');
const { getAllOrder, createOrder, updateOrder, deleteOrder, getOrder } = require('../controllers/OrderController');
const { getAllCategory, createCategory, updateCategory, deleteCategory } = require('../controllers/catetoryController');

routerAPI.get('/users', getAllUser)
routerAPI.post('/users', postCreateUser)
routerAPI.put('/users', updateUser)
routerAPI.delete('/users', deleteUser)

routerAPI.get('/products', getAllProduct)
routerAPI.get('/products/:id', getProduct)
routerAPI.post('/products', createProduct)
routerAPI.put('/products', updateProduct)
routerAPI.delete('/products/:id', deleteProduct)

routerAPI.get('/orders', getAllOrder)
routerAPI.get('/orders/:id', getOrder)
routerAPI.post('/orders', createOrder)
routerAPI.put('/orders', updateOrder)
routerAPI.delete('/orders', deleteOrder)

routerAPI.get('/categories', getAllCategory)
routerAPI.post('/categories', createCategory)
routerAPI.put('/categories', updateCategory)
routerAPI.delete('/categories/:id', deleteCategory)

module.exports = routerAPI