const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const cursor = await mongoose.connect(
      "mongodb+srv://outoflaksh:spomshark@cluster0.qevzl.mongodb.net/feather?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(`Database connected successfully at ${cursor.connection.host}`);
  } catch (e) {
    console.log(e);
    process.exit(1); //close the app in case of error
  }
};

module.exports = connectDB;
