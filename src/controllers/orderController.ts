// controllers/orderController.ts

import { Request, Response } from "express";

import OrderModel from "../models/Order";

export const getOrderList = async (req: Request, res: Response) => {

  try {

    const orders = await OrderModel.find();

    res.status(200).json(orders);

  } catch (error) {

    res.status(500).json({ error: "Internal Server Error" });
  }
};



//for a single order

export const getSingleOrder = async (req: Request, res: Response) => {
  const orderId = req.params.orderId;

  try {
    const order = await OrderModel.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//to create a new order



export const createOrder = async (req: Request, res: Response) => {
  const { items, totalPrice, userId } = req.body;

  try {
    const newOrder = new OrderModel({
      items,
      totalPrice,
      userId,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};  





