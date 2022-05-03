import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const dbConnect = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  try {
    await mongoose.connect(MONGODB_URI, options);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
