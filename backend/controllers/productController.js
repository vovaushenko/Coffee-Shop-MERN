import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc  Fetch ALL products
// @route  Get /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc  Fetch SINGLE product
// @route  Get /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found 😐');
  }
});

// @desc  🔺Delete a product🔺
// @route  DELETE /api/products/:id
// @access  Private/⚠️Admin⚠️
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product Removed' });
  } else {
    res.status(404);
    throw new Error('Product not found 😐');
  }
});

// @desc  Create a product
// @route  POST /api/products/
// @access  Private/⚠️Admin⚠️
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample Name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const cretedProduct = await product.save();

  res.status(201).json(cretedProduct);
});

// @desc  Update a product
// @route  PUT /api/products/:id
// @access  Private/⚠️Admin⚠️
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);

    throw new Error('Product not found');
  }
});

export { getProducts, getProductById, deleteProduct, updateProduct, createProduct };
