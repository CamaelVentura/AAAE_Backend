import mongoose from 'mongoose';


this.mongoConnection = mongoose.connect('mongodb+srv://AAAEADMIN:caju1972@cluster0.sfmdx.mongodb.net/AAAEDB?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", function() {
  
});