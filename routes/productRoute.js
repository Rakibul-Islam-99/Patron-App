import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, productPhotoController, singleProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'

const router =  express.Router()

//routes
//create product
router.post('/create-product', requireSignIn,isAdmin, formidable(), createProductController)

//update product
 router.put('/update-product/:pid', requireSignIn, isAdmin,formidable(), updateProductController)

//get Products
router.get('/get-product', getProductController)

//get single product
router.get('/single-product/:slug', singleProductController)

//get photo

router.get('/product-photo/:pid', productPhotoController)

//delete product

router.delete('/delete-product/:pid', requireSignIn, isAdmin, deleteProductController)


export default router