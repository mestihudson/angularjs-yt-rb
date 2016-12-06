var uuid = require("uuid");

var contatos = [
  {
    "id": uuid.v1(),
    "nome": "Pedro",
    "telefone": "999999999",
    "cor": "yellow",
    "operadora": {
      "nome": "Vivo",
      "codigo": 15,
      "categoria": "Celular"
    },
    "criadoEm": new Date()
  }, {
    "id": uuid.v1(),
    "nome": "Ana",
    "telefone": "999998888",
    "cor": "blue",
    "operadora": {
      "nome": "Claro",
      "codigo": 21,
      "categoria": "Celular"
    },
    "criadoEm": new Date()
  }, {
    "id": uuid.v1(),
    "nome": "Maria",
    "telefone": "999997777",
    "cor": "red",
    "operadora": {
      "nome": "TIM",
      "codigo": 41,
      "categoria": "Celular"
    },
    "criadoEm": new Date()
  }
];

var operadoras = [
  {
    "id": uuid.v1(),
    "nome": "Vivo",
    "codigo": 15,
    "categoria": "Celular",
    "preco": 2
  }, {
    "id": uuid.v1(),
    "nome": "Claro",
    "codigo": 21,
    "categoria": "Celular",
    "preco": 3.52
  }, {
    "id": uuid.v1(),
    "nome": "TIM",
    "codigo": 41,
    "categoria": "Celular",
    "preco": 24
  }, {
    "id": uuid.v1(),
    "nome": "GVT",
    "codigo": 25,
    "categoria": "Fixo",
    "preco": 200
  }, {
    "id": uuid.v1(),
    "nome": "Oi",
    "codigo": 31,
    "categoria": "Fixo",
    "preco": 2.1
  }
];

var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/', express.static('public/index.html'));

app.get('/contatos', function(request, response) {
  response.send(contatos);
});

app.get('/contatos/:id', function(request, response) {
  contatos.forEach(function(contato) {
    if(contato.id == request.params.id) {
      response.json(contato);
      return;
    }
  });
  response.status(404);
});

app.post('/contatos', function(request, response) {
  var contato = request.body;
  contato.id = uuid.v1();
  contato.criadoEm = new Date();
  contatos.push(contato);
  response.json(true);
});

app.delete('/contatos/:ids', function(request, response) {
  var ids = request.params.ids.split(',');

  contatos = contatos.filter(function(contato) {
    return !ids.includes(contato.id);
  });

  response.json(true);
});

app.get('/operadoras', function(request, response) {
  response.send(operadoras);
});

app.listen(3000);

console.log('Listening on port 3000...');
