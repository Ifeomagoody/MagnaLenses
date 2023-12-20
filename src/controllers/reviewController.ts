 // for all reviews

import { Request, Response } from 'express';
import ReviewModel from '../models/Review';

export const getAllReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewModel.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//to get reviews for products



export const getReviewsForProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;

  try {
    const reviews = await ReviewModel.find({ productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};  
