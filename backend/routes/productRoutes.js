import express from 'express';
import {
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  createProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, isAdmin } from '..//middleware/authMiddleware.js';

const router = express.Router();

// @desc  Fetch ALL products
router.route('/').get(getProducts).post(protect, isAdmin, createProduct);

// @desc Review route
router.route('/:id/reviews').post(protect, createProductReview);

// @desc Get Top-Rated Products
router.get('/top', getTopProducts);

// @desc  Fetch SINGLE product
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct)
  .put(protect, isAdmin, updateProduct);

export default router;
