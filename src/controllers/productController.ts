// src/controllers/productController.ts
import { Request, Response, NextFunction } from 'express';
import Product from '../models/Product.model';

export const getProducts = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (!product) {
      const error = new Error('Product not found');
      error.name = 'NotFoundError';
      throw error;
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title, price, sizes, imageUrl,
    } = req.body;
    if (!title || !price || !sizes || !imageUrl) {
      const error = new Error('Invalid data');
      error.name = 'ValidationError';
      throw error;
    }
    const newProduct = await Product.create({
      title, price, sizes, imageUrl,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title, price, sizes, imageUrl,
    } = req.body;
    const product = await Product.findByPk(req.params.productId);
    if (!product) {
      const error = new Error('Product not found');
      error.name = 'NotFoundError';
      throw error;
    }
    product.title = title || product.title;
    product.price = price || product.price;
    product.sizes = sizes || product.sizes;
    product.imageUrl = imageUrl || product.imageUrl;
    await product.save();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (!product) {
      const error = new Error('Product not found');
      error.name = 'NotFoundError';
      throw error;
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
