import mongoose, {Schema} from 'mongoose';

const BusSchema = new Schema({
  cpf: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
  tel: {
    type: String,
    required: true,
    default: "",
  },
  bus: {
    type: String,
    required: true,
    default: "",
  }, 
},
{ timestamps: true });

export default mongoose.model('Bus', BusSchema);