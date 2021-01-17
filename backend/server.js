const express = require('express');
const products = require('./data/products');

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
app.listen(5000, console.log('server running on port 5000 👋'));
