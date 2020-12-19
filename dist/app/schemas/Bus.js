"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const BusSchema = new (0, _mongoose.Schema)({
  cpf: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  bus: {
    type: String,
    required: true,
    default: "",
  }, 
},
{ timestamps: true });

exports. default = _mongoose2.default.model('Bus', BusSchema);