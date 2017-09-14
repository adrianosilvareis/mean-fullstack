angular.module('agenda').config(["$routeProvider", "$locationProvider", minhasFortas])

function minhasFortas($routeProvider, $locationProvider){

  /*
  ###################################  ATENÇÂO #############################################
  na versão 1.6.6 do angularjs é necessario adiconar esta configuração para não ter #! na url
  */
  $locationProvider.hashPrefix('');

  $routeProvider.when('/contatos', {
    templateUrl: "partials/contatos.html",
    controller: "contatosCtrl"
  })

  $routeProvider.when('/contato', {
    templateUrl: "partials/contato.html",
    controller: "contatoCtrl"
  })

  $routeProvider.when('/contato/:id', {
    templateUrl: "partials/contato.html",
    controller: "contatoCtrl"
  })

  $routeProvider.otherwise({ redirectTo: "/contatos" })
}
