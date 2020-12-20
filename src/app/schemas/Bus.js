import mongoose, {Schema} from 'mongoose';

const BusSchema = new Schema({
  cpf: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  tel: {
    type: String,
    default: "",
  },
  bus: {
    type: String,
    default: "",
  }, 
},
{ timestamps: true });

export default mongoose.model('Bus', BusSchema);