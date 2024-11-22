import { Book } from './book.interface';
import { BookModel } from './book.model';

const createProductsInToDb = async (book: Book) => {
  const result = await BookModel.create(book);
  return result;
};

export const StudentServices = {
  createProductsInToDb,
};
