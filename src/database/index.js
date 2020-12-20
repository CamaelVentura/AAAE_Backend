import mongoose from 'mongoose';
import 'dotenv/config'


this.mongoConnection = mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", function() {
  
});