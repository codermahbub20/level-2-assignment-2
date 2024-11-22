import { Book } from './book.interface';
import { BookModel } from './book.model';

const createProductsInToDb = async (book: Book) => {
  const result = await BookModel.create(book);
  return result;
};

// get all products in database

const getAllProductsInToDb = async () => {
  const result = await BookModel.find();
  return result;
};

// Get Specific id wise data into the database

const getSingleProductsIntoDb = async (_id: string) => {
  const result = BookModel.findOne({ _id });
  return result;
};

export const BookServices = {
  createProductsInToDb,
  getAllProductsInToDb,
  getSingleProductsIntoDb,
};
