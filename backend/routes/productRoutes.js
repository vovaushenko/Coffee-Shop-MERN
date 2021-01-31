import express from 'express';
import { deleteProduct, getProductById, getProducts } from '../controllers/productController.js';
import { protect, isAdmin } from '..//middleware/authMiddleware.js';

const router = express.Router();

// @desc  Fetch ALL products
router.route('/').get(getProducts);

// @desc  Fetch SINGLE product
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct);

export default router;
