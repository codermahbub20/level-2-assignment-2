import { Book } from './book.interface';
import { BookModel } from './book.model';

const createProductsInToDb = async (book: Book) => {
  const result = await BookModel.create(book);
  return result;
};

// get all products in database

const getAllProductsInToDb = async (searchItem: string) => {
  const result = await BookModel.find({
    $or: [
      { title: { $regex: searchItem, $options: 'i' } },
      { author: { $regex: searchItem, $options: 'i' } },
      { category: { $regex: searchItem, $options: 'i' } },
    ],
  });
  return result;
};

// Get Specific id wise data into the database

const getSingleProductsIntoDb = async (_id: string) => {
  const result = BookModel.findOne({ _id });
  return result;
};

// Get updated  data into the database

const getUpdatedProductIntoDb = async (_id: string, data: Book) => {
  const result = BookModel.findByIdAndUpdate({ _id }, data);
  return result;
};

// delete products using id   data into the database

const deleteProductIntoDb = async (_id: string) => {
  const result = BookModel.findByIdAndDelete({ _id });
  return result !== null;
};

export const BookServices = {
  createProductsInToDb,
  getAllProductsInToDb,
  getSingleProductsIntoDb,
  getUpdatedProductIntoDb,
  deleteProductIntoDb,
};
