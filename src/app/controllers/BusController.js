import Bus from '../schemas/Bus';''
;

export const index = async (req,res) => {
  const bus = await Bus.find().sort('bus');
  res.json(bus);
}

export const show = async (req, res) => {
  const { bus } = req.body;

  if (!bus) {
    return res.status(400).json({ error: 'Você precisa digitar o bus' });
  }

  const person = await Bus.find({bus: bus});

  if (person === null) {
    return res
      .status(400)
      .json({ error: 'Bus não encontrado!' });
  }

  return res.json(person);
};

export const store = async (req, res) => {
  const { cpf, name, tel } = req.body;

  const verify = await Bus.findOne({cpf: cpf});

  if (verify) {
    return res.status(400).json({ Erro: 'CPF já cadastrado' });
  } 

  try {
    const bus = await Bus.create({
      cpf,
      name,
      tel,
    });

    return res.json(bus);
  }
  catch(err){
    console.log(err);
  }
};

export const update = async (req, res) => {
  const {cpf, bus, tel, name, ok} = req.body; 
  
  const busFind = await Bus.find({bus}).countDocuments();

  const person = await Bus.findOne({
    cpf
  });
  
  if (person === null) {
    return res
      .status(400)
      .json({ error: 'CPF não encontrado!' });
  }
  if ((person.bus === "" || ok) && busFind < 42) {
    const newBus = await Bus.findByIdAndUpdate(
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

  
}
