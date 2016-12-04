angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, contatos, operadoras, serialGenerator) {
  $scope.titulo = "Lista Telefônica";
  $scope.contatos = contatos.data;
  $scope.operadoras = operadoras.data;

  var generateSerial = function(contatos) {
    contatos.forEach(function(item) {
      item.serial = serialGenerator.generate();
    });
  };
  $scope.adicionarContato = function(contato) {
    contato.serial = serialGenerator.generate();
    contatosAPI.saveContato(contato).success(function(data) {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };
  $scope.removerContatos = function(contatos) {
    var selecionados = [];
    contatos.forEach(function(contato) {
      if(contato.selecionado) return selecionados.push(contato.id);
    });
    contatosAPI.removerContatos(selecionados).success(function(data) {
      carregarContatos();
    });
  };
  $scope.isContatoSelecionado = function (contatos) {
    return contatos.some(function (contato) {
      return contato.selecionado;
    });
  };
  $scope.ordenarPor = function(campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };
  generateSerial($scope.contatos);
});
