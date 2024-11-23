import { Request, Response } from 'express';
import { OrderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    // received response data from clients
    const { order } = req.body;
    // send the data in services function to save this data in mongodb
    const result = await OrderServices.createOrderInToDb(order);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderControllers = {
  createOrder,
};
