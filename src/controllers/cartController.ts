
// to get cart details

import { Request, Response } from 'express';
import CartModel from '../models/Cart';

export const getCartDetails = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const cart = await CartModel.findOne({ userId });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 

