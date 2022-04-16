const express = require('express');
const cors = require('cors');
const route = require('./src/routes/humorista.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/humoristas', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
