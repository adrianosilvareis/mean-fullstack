angular.module('agenda')
  .controller('contatosCtrl', ["$scope", contatosCtrl])

  function contatosCtrl($scope){
    $scope.title = "Contatos"

    $scope.contato = {}
    $scope.contatos = []

    $scope.adicionar = (contato) => {
      $scope.contatos.push(angular.copy(contato))
      delete $scope.contato
    }

    $scope.remover = (contato) => {
      // forma reduzida de uma arrow function
      // cont => cont != contato
      $scope.contatos = $scope.contatos.filter(cont => cont != contato )
    }
  }
