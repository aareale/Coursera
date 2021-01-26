(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchController', LunchController);

        LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.obj = "";
        $scope.checkLunch = function(lunchList) {

            if (lunchList === undefined || lunchList === null) {
                $scope.obj = "Please enter data first! ";
            } else {
                var arr = lunchList.split(",");

                var noNull = arr.filter(item => item);

                if (noNull.length > 3)
                    $scope.obj = "Too much!";
                else
                    $scope.obj = "Enjoy!";
            }
        };


    }

})();