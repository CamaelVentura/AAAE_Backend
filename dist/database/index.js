"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);


this.mongoConnection = _mongoose2.default.connect('mongodb+srv://AAAEADMIN:caju1972@cluster0.sfmdx.mongodb.net/AAAEDB?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = _mongoose2.default.connection;

connection.once("open", function() {
  
});