import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { createProductController,
    deleteProductController,
    getProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductcontroller,
    searchProductController,
    singleProductController,
    updateProductController } from '../controllers/productController.js';
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
router.get('/get-product/:slug', singleProductController)

//get photo

router.get('/product-photo/:pid', productPhotoController)

//delete product

router.delete('/delete-product/:pid', requireSignIn, isAdmin, deleteProductController)


//Filter Products
router.post('/product-filters',productFiltersController)

//Product count
router.get('/product-count', productCountController);

//product per page
router.get('/product-list/:page', productListController);

 // search product
 router.get('/search/:keyword', searchProductController);
 //Similar Product
 router.get('/related-product/:pid/:cid', relatedProductcontroller)

//category wise product
router.get('/product-category/:slug',productCategoryController)

export default router