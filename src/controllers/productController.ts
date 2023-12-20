// to get list of all products

import { Request, Response } from 'express';
import ProductModel from '../models/Product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



//to get a single product



export const getSingleProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  try {
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 

