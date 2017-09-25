angular.module('agenda')
  .controller('contatosCtrl', ["$scope", "Contato", contatosCtrl])

  function contatosCtrl($scope, Contatos){

    /*
    **********************************************
    ****************** Public ********************
    **********************************************
    */

    $scope.title = "Contatos"
    $scope.contato = {}
    $scope.contatos = []

    $scope.remover = (contato) => {
      // $http.delete("contatos/" + contato._id).then(carregarContatos, error)
      Contatos.delete({id: contato._id}, carregarContatos, error)
    }

    /*
    **********************************************
    ****************** Private *******************
    **********************************************
    */
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
