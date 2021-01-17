import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config();

const app = express();

////////////// ROUTES /////////////////
app.get('/', (req, res) => {
    res.send('API is running... 😉');
});

//      get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});
//     get single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => req.params.id === p._id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`👋 Server running in ${process.env.NODE_ENV} on port ${PORT} 👋`));
