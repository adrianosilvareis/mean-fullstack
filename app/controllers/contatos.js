module.exports = (app) => {
  const controller = {}
  const Contato = app.models.contatos

  /*
  *********************************************
  ************ metodos publicos ***************
  *********************************************
  */
  controller.listarContatos = (req, res, next) => {
    Contato.find().populate('emergencia').exec()
      .then((contatos) => res.json(contatos))
      .catch((err) => res.status(500).json(err))
  }

  controller.obterContato = (req, res, next) => {
    let _id = req.params.id
    Contato.findById(_id).exec()
      .then((contato) => {
        if(!contato) throw Erro("Contato não encontrado")
        res.json(contato)
      })
      .catch((err) => res.status(500).json(err))
  }

  controller.removerContato = (req, res, next) => {
    let _id = req.params.id
    
    Contato.remove({ "_id": _id })
      .then(() => res.end())
      .catch((err) => console.log(err))
  }

  controller.salvarContato = (req, res, next) => {
    req.body.emergencia = req.body.emergencia || null

    let contatoToSave = req.body

    if(contatoToSave._id){
      //atualizar
      Contato.findByIdAndUpdate(contatoToSave._id, contatoToSave, { new: true })
        .exec()
        .then((contato) => res.json(contato))
        .catch((err) => res.status(500).json(err))
    }else{
      //salvar novo
      Contato.create(contatoToSave)
        .then((contato) => res.status(201).json(contato))
        .catch((err) => res.status(500).json(err))
    }
  }

  return controller
}
