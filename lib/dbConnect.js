import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

const dbConnect = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  try {
    await mongoose.connect(MONGO_URI, options);
  } catch (error) {
    process.exit(1);
  }
};

export default dbConnect;
