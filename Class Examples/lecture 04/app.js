(function (){
  'use strict';
  var x= "hello";
  angular.module('myFirstApp',[])
  .controller('MyFirstController', function($scope){
    $scope.name= "Betty";
    $scope.sayHello = function(){
        return "Hello Coursera";
      }
  });
})();
