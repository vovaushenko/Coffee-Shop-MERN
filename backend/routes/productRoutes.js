import express from 'express';
import { getProductById, getProducts } from '../controllers/productController.js';

const router = express.Router();

// @desc  Fetch ALL products
router.route('/').get(getProducts);

// @desc  Fetch SINGLE product
router.route('/:id').get(getProductById);

export default router;
