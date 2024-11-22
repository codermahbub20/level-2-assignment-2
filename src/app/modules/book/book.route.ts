import express from 'express';
import { BookControllers } from './book.controler';

const router = express.Router();

router.post('/products', BookControllers.createProducts);

export const BookRoutes = router;
