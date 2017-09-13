angular.module('agenda')
  .controller('contatosCtrl', ["$scope", contatoCtrl])

  function contatoCtrl($scope){
    $scope.title = "Contatos"

    $scope.contato = {}
    $scope.contatos = []

    $scope.adicionar = (contato) => {
      $scope.contatos.push(angular.copy(contato))
      delete $scope.contato
    }
  }
