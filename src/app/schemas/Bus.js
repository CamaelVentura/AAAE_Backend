import mongoose, {Schema} from 'mongoose';

const BusSchema = new Schema({
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

export default mongoose.model('Bus', BusSchema);