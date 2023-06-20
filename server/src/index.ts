import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './mongodb/connect';
import { postRouter } from './routes/postRoutes';
import { dalleRouter } from './routes/dalleRoutes';

const PORT = 8080;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRouter);
app.use('/api/v1/dalle', dalleRouter);

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello from DALL-E!');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONDODB_URL);

    app.listen(PORT, () => {
      console.log(`Server has started on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
