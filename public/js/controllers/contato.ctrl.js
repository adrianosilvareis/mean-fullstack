angular.module('agenda')
  .controller('contatoCtrl', ["$scope","$routeParams", "Contato", contatoCtrl])

  function contatoCtrl($scope, $routeParams, Contato){

    /*
    **********************************************
    ****************** Public ********************
    **********************************************
    */

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

    /*
    **********************************************
    ****************** Private *******************
    **********************************************
    */

    // verifica se existe parametro
    let init = (_id) => {
      carregarContatos()

      _id ?
        carregaContato(_id) :
        novoContato()
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

    let carregarContatos = () =>{
      // $http.get('/contatos').then(success, error)
      Contato.query((contatos) => {
        $scope.contatos = contatos
      }, error)
    }

    init($routeParams.id)
  }
