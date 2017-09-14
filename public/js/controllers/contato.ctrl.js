angular.module('agenda')
  .controller('contatoCtrl', ["$scope","$routeParams", "$http", contatoCtrl])

  function contatoCtrl($scope, $routeParams, $http){

    // salvar alteração ou novo contato
    $scope.salvar = (contato) => {
      $http.post('/contatos', contato)
        .then(success, error)

      delete $scope.contato.message
    }

    // função de successo
    function success(success){
      $scope.contato = success.data
    }

    // função de retorno de erro
    function error(error){
      console.log("Error", error)
      $scope.contato = { message: error.data }
    }

    // verifica se existe parametro
    let init = (_id) => {
      _id ?
        carregaContato(_id) :
        novoContato()
    }

    // se existir parametro carrega
    function carregaContato(_id) {
      $http.get("/contatos/" + _id)
        .then(success, error)
    }

    // caso não exista inicia o objeto fazio
    function novoContato(){
      $scope.contato = {message: "Novo contato"}
    }

    init($routeParams.id)
  }
