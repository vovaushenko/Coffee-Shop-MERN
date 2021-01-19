import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

////////////////////////// ROUTES /////////////////////////////
app.get('/', (req, res) => {
  res.send('API is running... 😉');
});

//@desc  mount to products
app.use('/api/products', productRoutes);

////////////////////////MIDDLEWARE////////////////////////////

// @desc  error handlers
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`👋 Server running in ${process.env.NODE_ENV} on port ${PORT} 👋`.yellow.bold)
);
