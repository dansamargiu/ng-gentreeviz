
angular.module('personDataFactory', [])
       .factory('personData', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'assets/person-list.json',
        cache: true
      }).success(callback);
    }
  };
});
