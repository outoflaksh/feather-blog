const mongoose = require("mongoose");

const connectDB = async (MONGO_URI) => {
  try {
    const cursor = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connected successfully at ${cursor.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1); //close the app in case of error
  }
};

module.exports = connectDB;
