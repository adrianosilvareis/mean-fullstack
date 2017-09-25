angular.module('agenda')
  .factory('Contato', ['$resource', contatoService])

  function contatoService($resource){
    return $resource("/contatos/:id")
  }
