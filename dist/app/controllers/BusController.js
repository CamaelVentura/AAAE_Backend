"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Bus = require('../schemas/Bus'); var _Bus2 = _interopRequireDefault(_Bus);''
;

 const index = async (req,res) => {
  const bus = await _Bus2.default.find().sort('bus');
  res.json(bus);
}; exports.index = index

 const show = async (req, res) => {
  const { bus } = req.body;

  if (!bus) {
    return res.status(400).json({ error: 'Você precisa digitar o bus' });
  }

  const person = await _Bus2.default.find({bus: bus});

  if (person === null) {
    return res
      .status(400)
      .json({ error: 'Bus não encontrado!' });
  }

  return res.json(person);
}; exports.show = show;

 const store = async (req, res) => {
  const { cpf, name, tel } = req.body;

  const verify = await _Bus2.default.findOne({cpf: cpf});

  if (verify) {
    return res.status(400).json({ Erro: 'CPF já cadastrado' });
  } 

  try {
    const bus = await _Bus2.default.create({
      cpf,
      name,
      tel,
    });

    return res.json(bus);
  }
  catch(err){
    console.log(err);
  }
}; exports.store = store;

 const update = async (req, res) => {
  const {cpf, bus, tel, name, ok} = req.body; 
  
  const busFind = await _Bus2.default.find({bus}).countDocuments();

  const person = await _Bus2.default.findOne({
    cpf
  });
  
  if (person === null) {
    return res
      .status(400)
      .json({ error: 'CPF não encontrado!' });
  }
  if ((person.bus === "" || ok) && busFind < 42) {
    const newBus = await _Bus2.default.findByIdAndUpdate(
      person.id,
      {
        name,
        tel,
        bus,
      },    
      { new: true }
    );
    return res.json(newBus);
  }
  else {
    if(busFind >= 42){
      return res
      .status(400)
      .json({ error: 'Busão já está lotado!' });
    }
    else{
      return res
      .status(400)
      .json({ error: 'CPF já cadastrado em outro busão!' });
    }
    
  }

  
}; exports.update = update
