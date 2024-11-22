import express from 'express';
import { BookControllers } from './book.controler';

const router = express.Router();

router.post('/products', BookControllers.createProducts);

router.get('/products', BookControllers.getAllProducts);

router.get('/products/:productId', BookControllers.getSingleProducts);

export const BookRoutes = router;
