// database connection start

//Import the mongoose module
var mongoose = require('mongoose');

// setup default mongoose connection
var mongoDB = 'mongodb+srv://codesuhan93:animuspunk@cluster0.bacfe.mongodb.net/local-library?retryWrites=true&w=majority';


// //Bind connection to error event (to get notification of connection errors)
// db.on("error", console.error.bind(console, 'MongoDB connection error: '));

const connectDB = async () => { 
  try {
      const conn = await mongoose.connect(mongoDB, {
          useNewUrlParser: true
      });

      console.log(`connected to tha MONGO_DB: ${conn.connection.host}`);
  } catch (error) {
      console.log(`Error Message: ${error}`);
  }
}

module.exports = connectDB