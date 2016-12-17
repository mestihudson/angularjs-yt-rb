angular.module("listaTelefonica").controller("detalhes-contato-controller", function($scope, contato) {
  $scope.contato = contato.data;
});
