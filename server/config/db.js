const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mz7731346:kGdWOtV7Wto1kkxI@cluster0.r7mtc.mongodb.net/myfirstdatabase?retryWrites=true&w=majority&appName=Cluster0';
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
