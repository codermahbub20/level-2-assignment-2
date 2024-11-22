import { Request, Response } from 'express';
import { StudentServices } from './book.service';

const createProducts = async (req: Request, res: Response) => {
  try {
    // received response data from clients
    const { book } = req.body;
    // send the data in services function to save this data in mongodb
    const result = await StudentServices.createProductsInToDb(book);
    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BookControllers = {
  createProducts,
};
