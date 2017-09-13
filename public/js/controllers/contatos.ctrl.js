angular.module('agenda')
  .controller('contatosCtrl', ["$scope", contatoCtrl])

  function contatoCtrl($scope){
    $scope.title = "teste"
  }
