const humoristaService = require('../services/humorista.service');

const homeHumoristaController = (req, res) => {
  res.send('Home - Humoristas nordestinos');
};

const allHumoristasController = (req, res) => {
  const allHumoristas = humoristaService.allHumoristasService();

  if (allHumoristas.length == 0) {
    return res.status(404).send({ message: 'Nenhum humorista cadastrato!' });
  }

  res.send(allHumoristas);
};

const humoristaByIdController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenHumorista = humoristaService.humoristaByIdService(idParam);

  if (!chosenHumorista) {
    return res.status(404).send({ message: 'Humorista não encontrado!' });
  }

  res.send(chosenHumorista);
};

const addHumoristaController = (req, res) => {
  const humorista = req.body;

  if (
    !humorista ||
    !humorista.nome ||
    !humorista.cidade ||
    !humorista.estado ||
    !humorista.foto
  ) {
    return res.status(400).send({
      message:
        'Erro! Por favor, envie todos os campos do humorista corretamente.',
    });
  }

  const newHumorista = humoristaService.addHumoristaService(humorista);
  res.status(201).send(newHumorista);
};

const updateHumoristaController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const humoristaEdit = req.body;

  if (
    !humoristaEdit ||
    !humoristaEdit.nome ||
    !humoristaEdit.cidade ||
    !humoristaEdit.estado ||
    !humoristaEdit.foto
  ) {
    return res.status(400).send({
      message:
        'Erro! Por favor, envie todos os campos do humorista corretamente.',
    });
  }

  const updateHumorista = humoristaService.updateHumoristaService(
    idParam,
    humoristaEdit,
  );
  res.send(updateHumorista);
};

const deleteHumoristaController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  humoristaService.deleteHumoristaService(idParam);  
  res.send({ message: 'Humorista deletado com sucesso!' });
};

module.exports = {
  homeHumoristaController,
  allHumoristasController,
  humoristaByIdController,
  addHumoristaController,
  updateHumoristaController,
  deleteHumoristaController,
};