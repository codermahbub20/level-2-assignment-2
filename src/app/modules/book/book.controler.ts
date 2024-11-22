import { Request, Response } from 'express';
import { BookServices } from './book.service';

const createProducts = async (req: Request, res: Response) => {
  try {
    // received response data from clients
    const { book } = req.body;
    // send the data in services function to save this data in mongodb
    const result = await BookServices.createProductsInToDb(book);
    res.status(200).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get all products in to the database
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllProductsInToDb();
    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get single products in to the database
const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await BookServices.getSingleProductsIntoDb(productId);
    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get updated products in to the database
const getUpdatedProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const result = await BookServices.getUpdatedProductIntoDb(productId, data);
    res.status(200).json({
      message: 'Book updated successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BookControllers = {
  createProducts,
  getAllProducts,
  getSingleProducts,
  getUpdatedProduct,
};
