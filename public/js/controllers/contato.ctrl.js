angular.module('agenda')
  .controller('contatoCtrl', ["$scope","$routeParams", contatoCtrl])

  function contatoCtrl($scope, $routeParams){
    let contatos = [
      {id: 1, nome: 'contato 1', email:'cont1@email.com'},
      {id: 2, nome: 'contato 2', email:'cont2@email.com'},
      {id: 3, nome: 'contato 3', email:'cont3@email.com'},
      {id: 4, nome: 'contato 4', email:'cont4@email.com'},
      {id: 5, nome: 'contato 5', email:'cont5@email.com'}
    ]

    $scope.contato = {}

    let init = (idContato) => {
      let contato = {}
      idContato ? contato = contatos.filter(contato => contato.id == idContato)[0] : contato = {message: "Novo Contato"}

      $scope.contato = contato
    }

    init($routeParams.id)
  }
