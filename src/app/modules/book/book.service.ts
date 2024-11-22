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

export const BookServices = {
  createProductsInToDb,
  getAllProductsInToDb,
};
