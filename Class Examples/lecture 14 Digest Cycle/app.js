(function () {
'use strict';
angular.module('CounterApp',[])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout){
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "sfaf";

  $scope.showNumberOfWatchers = function(){
    console.log("Number of watchers: ", $scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function(){
    setTimeout(function (){

      $timeout(function(){
        $scope.counter++;
        console.log("Counter Incremented!");
      }, 2000);

      /*$scope.$apply(function(){
        $scope.counter++;
        console.log("Counter Incremented!");
      })*/

      //$scope.counter++;
      //console.log("Counter Incremented!");

      //$scope.$digest();
    }, 2000);
    //$scope.counter ++;
  };

  $scope.$watch(function(){
    console.log("Digest Loop Fired")
  })

  /*$scope.$watch('onceCounter', function (newValue, oldValue){
    console.log("onceCounter old value: ", oldValue);
    console.log("onceCounter new value: ", newValue);
  });
  $scope.$watch('counter', function (newValue, oldValue){
    console.log("counter old value: ", oldValue);
    console.log("counter new value: ", newValue);
  });
  */
}

})();
