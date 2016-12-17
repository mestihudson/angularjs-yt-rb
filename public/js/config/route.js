angular.module("listaTelefonica").config(function($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "view/contatos.html",
    controller: "lista-telefonica-controller",
    resolve: {
      contatos: function(contatosAPI) {
        return contatosAPI.getContatos();
      },
      operadoras: function(operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });
  $routeProvider.when("/novoContato", {
    templateUrl: "view/novo-contato.html",
    controller: "novo-contato-controller",
    resolve: {
      operadoras: function(operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });
  $routeProvider.when("/detalhesContato/:id", {
    templateUrl: "view/detalhes-contato.html",
    controller: "detalhes-contato-controller",
    resolve: {
      contato: function(contatosAPI, $route) {
        return contatosAPI.getContato($route.current.params.id);
      }
    }
  });
  $routeProvider.when("/error", {
    templateUrl: "view/error.html"
  });
  $routeProvider.otherwise({
    redirectTo: "/contatos"
  });
});
