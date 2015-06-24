define(function () {

    return { 
        taxSavings: function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: "app/views/taxSavings.html"
            }
        },
        tradPlan: function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: "app/views/traditionalPlan.html"
            }
        }
    }

});