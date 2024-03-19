import mongoose from "mongoose"

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:3y3vaye1@anproduction.7j0m3fs.mongodb.net/?retryWrites=true&w=majority&appName=anproduction");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

export default connect;