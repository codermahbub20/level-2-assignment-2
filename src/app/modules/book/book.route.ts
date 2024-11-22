import express from 'express';
import { BookControllers } from './book.controler';

const router = express.Router();

router.post('/products', BookControllers.createProducts);

router.get('/products', BookControllers.getAllProducts);

export const BookRoutes = router;
