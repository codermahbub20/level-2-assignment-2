import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BookRoutes } from './app/modules/book/book.route';
const app: Application = express();

// parsers use
app.use(express.json());
app.use(cors());

//  application routes
app.use('/api', BookRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
