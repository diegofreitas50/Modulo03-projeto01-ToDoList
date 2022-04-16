const express = require('express');

const router = express.Router();

const humoristaController = require('../controllers/humorista.controller');

router.get('/', humoristaController.homeHumoristaController);

router.get('/all-humoristas', humoristaController.allHumoristasController);

router.get('/humorista/:id', humoristaController.humoristaByIdController);

router.post('/add', humoristaController.addHumoristaController);

router.put('/update/:id', humoristaController.updateHumoristaController);

router.delete('/delete/:id', humoristaController.deleteHumoristaController);

module.exports = router;
