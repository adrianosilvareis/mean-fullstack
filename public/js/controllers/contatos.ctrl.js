angular.module('agenda')
  .controller('contatosCtrl', ["$scope", "$resource", contatosCtrl])

  function contatosCtrl($scope, $resource){

    // $http deixou de ser utilizado
    
    const Contatos = $resource("/contatos/:id")

    $scope.title = "Contatos"
    $scope.contato = {}
    $scope.contatos = []

    $scope.remover = (contato) => {
      // $http.delete("contatos/" + contato._id).then(carregarContatos, error)
      Contatos.delete({id: contato._id}, carregarContatos, error)
    }

    let carregarContatos = () =>{
      // $http.get('/contatos').then(success, error)
      Contatos.query(success, error)
    }

    function success(contatos){
      // $scope.contatos = contatos.data
      $scope.contatos = contatos
    }

    function error(error){
      $scope.message = {text: "Erro ao carregar contatos", error: error}
    }

    carregarContatos()

  }
