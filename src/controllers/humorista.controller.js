const humoristaService = require('../services/humorista.service');

const homeHumoristaController = (req, res) => {
  res.send('Home - Humoristas nordestinos');
};

const allHumoristasController = (req, res) => {
  const allHumoristas = humoristaService.allHumoristasService();
  res.send(allHumoristas);
};

const humoristaByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenHumorista = humoristaService.humoristaByIdService(idParam);
  res.send(chosenHumorista);
};

const addHumoristaController = (req, res) => {
  const humorista = req.body;
  const newHumorista = humoristaService.addHumoristaService(humorista);
  res.send(newHumorista);
};

const updateHumoristaController = (req, res) => {
  const idParam = req.params.id;
  const humoristaEdit = req.body;
  const updateHumorista = humoristaService.updateHumoristaService(idParam, humoristaEdit);
  res.send(updateHumorista);
};

const deleteHumoristaController = (req, res) => {
  const idParam = req.params.id;
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
