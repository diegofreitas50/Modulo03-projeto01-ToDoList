const humoristas = [
  {
    id: 1,
    nome: 'Tom Cavalcante',
    cidade: 'Fortaleza',
    estado: 'Ceará',
    foto: '../../assets/media/tomCavalcante.png',
  },
  {
    id: 2,
    nome: 'Chico Anysio',
    cidade: "Maranguape",
    estado: "Ceará",
    foto: '../../assets/media/chicoAnysio.png',
  },
  {
    id: 3,
    nome: 'Mução',
    cidade: 'Natal',
    estado: 'Rio Grande do Norte',
    foto: '../../assets/media/mucao.jpg'
  },
];

const allHumoristasService = () => {
    return humoristas;
};

const humoristaByIdService = (id) => {
    return humoristas.find((humorista) => humorista.id == id);
};

const addHumoristaService = (newHumorista) => {
    const newId = humoristas.length + 1;
    newHumorista.id = newId;
    humoristas.push(newHumorista);
    return newHumorista;    
};

const updateHumoristaService = (id, humoristaEdited) => {
    humoristaEdited['id'] = id;
    const humoristaIndex = humoristas.findIndex((humorista) => humorista.id == id);
    humoristas[humoristaIndex] = humoristaEdited;
    return humoristaIndex;
}

const deleteHumoristaService = (id) => {
    const humoristaIndex = humoristas.findIndex((humorista) => humorista.id == id);
    return humoristas.splice (humoristaIndex, 1);
}

module.exports = {
    allHumoristasService,
    humoristaByIdService,
    addHumoristaService,
    updateHumoristaService,
    deleteHumoristaService,
};