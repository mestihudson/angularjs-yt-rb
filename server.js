var express = require('express');

var app = express();

var contatos = [
  {
    "nome": "Pedro",
    "telefone": "999999999",
    "cor": "yellow",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular"
    },
    "criadoEm": "2016-11-30T10:04:04.204Z"
  }, {
    "nome": "Ana",
    "telefone": "999998888",
    "cor": "blue",
    "operadora": {
      "nome": "Claro",
      "codigo": 21,
      "categoria": "Celular"
    },
    "criadoEm": "2016-11-30T10:04:04.204Z"
  }, {
    "nome": "Maria",
    "telefone": "999997777",
    "cor": "red",
    "operadora": {
      "nome": "TIM",
      "codigo": 41,
      "categoria": "Celular"
    },
    "criadoEm": "2016-11-30T10:04:04.204Z"
  }
];

var operadoras = [
  {
    "nome": "Vivo",
    "codigo": 15,
    "categoria": "Celular",
    "preco": 2
  }, {
    "nome": "Claro",
    "codigo": 21,
    "categoria": "Celular",
    "preco": 3.52
  }, {
    "nome": "TIM",
    "codigo": 41,
    "categoria": "Celular",
    "preco": 24
  }, {
    "nome": "GVT",
    "codigo": 25,
    "categoria": "Fixo",
    "preco": 200
  }, {
    "nome": "Oi",
    "codigo": 31,
    "categoria": "Fixo",
    "preco": 2.1
  }
];

app.use(express.static('public'));

app.use('/', express.static('public/index.html'));

app.get('/contatos', function(req, res) {
  console.log(contatos)
  res.send(contatos);
});

app.get('/operadoras', function(req, res) {
  console.log(operadoras)
  res.send(operadoras);
});

app.post('/contatos', function(req, res) {
  console.log(req.params.contato)
  contatos.push(req.params.contato);
});

app.listen(3000);

console.log('Listening on port 3000...');
