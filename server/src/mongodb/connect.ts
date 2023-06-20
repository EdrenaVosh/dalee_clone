import mongoose from 'mongoose';

export const connectDB = (url?: string) => {
  mongoose.set('strictQuery', true);

  if (url) {
    mongoose.connect(url)
      .then(() => console.log('MongoDB connected'))
      .catch((err: Error) => console.log('Error: ', err));
  }
};