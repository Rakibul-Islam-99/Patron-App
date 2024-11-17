import express from  'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryContorller.js';

const router= express.Router();

//routes
//create category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController)

//update category
router.put('/update-category/:id', requireSignIn,isAdmin, updateCategoryController)


//get all category
router.get('/get-category', categoryController)

//Single category
router.get('/get-category/:slug', singleCategoryController)

//delete single category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)


export default router