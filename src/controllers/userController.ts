// to get list of users

import { Request, Response } from 'express';
import UserModel from '../models/User';

export const getUserList = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



//to get a user

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}; 


