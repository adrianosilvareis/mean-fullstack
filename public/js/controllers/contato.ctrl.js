angular.module('agenda')
  .controller('contatoCtrl', ["$scope","$routeParams", "$http", contatoCtrl])

  function contatoCtrl($scope, $routeParams, $http){

    $scope.salvar = (contato) => {
      $http.post('/contatos', contato)
        .then(success, error)
    }

    function success(success){
      console.log(success)
    }

    function error(error){
      console.log("Error", error)
    }
    
  }
