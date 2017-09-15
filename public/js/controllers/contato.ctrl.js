angular.module('agenda')
  .controller('contatoCtrl', ["$scope","$routeParams", "$resource", contatoCtrl])

  function contatoCtrl($scope, $routeParams, $resource){

    // $http deixou de ser utilizado
    const Contato = $resource("/contatos/:id")

    // salvar alteração ou novo contato
    $scope.salvar = (contato) => {
      // $http.post('/contatos', contato).then(success, error)
      $scope.contato.$save()
        .then(() => {
          $scope.contato = new Contato()
          $scope.contato.message = "Contato Salvo com sucesso!"
        })
        .catch((error) => { $scope.contato.message = "Não foi possivel salvar!" })
    }

    // função de successo
    function success(success){
      // $scope.contato = success.data
      $scope.contato = success
    }

    // função de retorno de erro
    function error(error){
      console.log("Error", error)
      $scope.contato.message = error.data
    }

    // verifica se existe parametro
    let init = (_id) => {
      _id ?
        carregaContato(_id) :
        novoContato()
    }

    // se existir parametro carrega
    function carregaContato(_id) {
      // $http.get("/contatos/" + _id).then(success, error)
      Contato.get({id: _id}, success, error)
    }

    // caso não exista inicia o objeto fazio
    function novoContato(){
      $scope.contato = new Contato()
      $scope.contato.message = "Novo contato"
    }

    init($routeParams.id)
  }
