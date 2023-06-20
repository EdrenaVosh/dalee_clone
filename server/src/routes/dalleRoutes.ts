import express, { Response, Request } from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import { RequestBody } from './types';

dotenv.config();

const dalleRouter = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

dalleRouter.route('/').get((req: Request, res: Response) => {
  res.send('Hello from DALL-E!!!');
});

dalleRouter.route('/').post(async (req: Request, res: Response) => {
  try {
    const { prompt }: RequestBody = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error: any) {
    res.status(500).send(error?.response.data.error.message);
  }
});

export { dalleRouter };
