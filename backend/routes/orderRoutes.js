import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { protect } from '..//middleware/authMiddleware.js';

route.route('/').post(protect, addOrderItems);

export default router;
