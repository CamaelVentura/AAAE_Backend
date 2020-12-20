"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
require('dotenv/config');


this.mongoConnection = _mongoose2.default.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const connection = _mongoose2.default.connection;

connection.once("open", function() {
  
});