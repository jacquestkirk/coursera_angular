(function (){
  'use strict';

  angular.module('DIApp', [])
  .controller('DIController', DIController)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  DIController.$inject = ['$scope', '$filter', '$injector', 'lovesFilter', 'truthFilter' ];
  function DIController ($scope, $filter, $injector, lovesFilter, truthFilter){
    $scope.name = "Betty"

    $scope.cookieCost = .25

    $scope.upper = function()
    {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name)
    }

    $scope.sayLovesMessage = function()
    {
      var msg = $scope.name + " really likes peanut butter";
      msg = lovesFilter(msg);
      return msg;
    }

    $scope.sayTruthMessage = function()
    {
      var msg = $scope.name + " really likes peanut butter";
      msg = lovesFilter(msg);
      msg = truthFilter(msg, "peanut", "almond");
      return msg;
    }


    console.log($injector.annotate(DIController))
  }

  function AnnotateMe(name, job, blah)
  {
    return "Blah!";
  }

  function LovesFilter()
  {
    return function (input ){
      input = input || ""; //make sure input is defined, if not, use empty string
      input = input.replace("likes", "loves");
      return input;
    };
  }

  function TruthFilter()
  {
    return function (input, target, replace)
    {
      input = input || ""; //make sure input is defined, if not, use empty string
      input = input.replace(target, replace);
      return input;
    };
  }

  console.log(AnnotateMe.toString());

})();
