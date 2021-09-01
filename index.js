const express = require('express');
const bodyParser = require('body-parser');
const getAllTalkers = require('./middlewares/getAllTalkers.js');
const getTalkerById = require('./middlewares/getTalkerById.js');
const { geraToken, validaEmail, validaPassword } = require('./middlewares/login');
const validationTalker = require('./middlewares/validationTalker.js');
const createTalker = require('./middlewares/createTalker');
const editTalker = require('./middlewares/editTalker.js');
const deleteTalker = require('./middlewares/deleteTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', getAllTalkers);
app.get('/talker/:id', getTalkerById);
app.post('/login', validaEmail, validaPassword, geraToken);
app.post('/talker', validationTalker, createTalker);
app.put('/talker/:id', validationTalker, editTalker);
app.delete('/talker/:id', validationTalker[0], deleteTalker);
