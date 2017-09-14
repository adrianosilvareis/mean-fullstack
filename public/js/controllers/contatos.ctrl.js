angular.module('agenda')
  .controller('contatosCtrl', ["$scope", "$http", contatosCtrl])

  function contatosCtrl($scope, $http){
    $scope.title = "Contatos"
    $scope.contato = {}
    $scope.contatos = []

    $scope.remover = (contato) => {
      $http.delete("contatos/" + contato._id)
        .then(carregarContatos, error)
    }

    let carregarContatos = () =>{
      $http.get('/contatos')
        .then(success, error)
    }

    function success(contatos){
      $scope.contatos = contatos.data
    }

    function error(error){
      $scope.message = {text: "Erro ao carregar contatos", error: error}
    }

    carregarContatos()

  }
