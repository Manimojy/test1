(function () {
    'use strict';

    var myFirstApp = angular.module('LunchCheck', [])

    myFirstApp.controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.txtEntered = "";
        $scope.msg="";

        $scope.getStatus = function () {
            $scope.msg  = CalculateValueofString($scope.txtEntered);
        };

        function CalculateValueofString(str) {
            var msg="";
            if(str.length===0)
                msg = "Please enter data first";
            else
            
            {
                        var strs=str.split(',');
                        var len = strs.length;
                        if(len>=1 && len<=3)
                          msg="Enjoy";
                        else if(len>3)
                          msg="Too much!";
            }


            return msg;
        }
    }
})();
