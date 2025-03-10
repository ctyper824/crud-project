const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// const mongoURI = process.env.mongoURI;
const mongoURI = "mongodb+srv://newuser:PO8r8Yoo8PrQvhNA@cluster0.gzcwm.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0";
// const mongoURI = 'mongodb://localhost:27017/crud';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
