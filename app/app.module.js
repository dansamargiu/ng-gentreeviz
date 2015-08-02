
var genTreeApp = angular.module('genTreeApp', [
  'ngRoute',
  'personDataFactory',
  'utilitiesFactory'
]);

genTreeApp.config(function($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'app/components/person/person-list.html',
    controller: 'PersonListCtrl'
  }).
  when('/:countryName', {
    templateUrl: 'app/components/person/person-detail.html',
    controller: 'PersonDetailCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});

genTreeApp.controller('PersonListCtrl', function(
  $scope,
  $http,
  personData,
  utilities) {

  $scope.getReadableName = utilities.getReadableName;

  personData.list(function(personList) {
    $scope.personList = personList;
  });
});

genTreeApp.controller('PersonDetailCtrl', function(
  $scope, $routeParams) {

  console.log($routeParams);
});
