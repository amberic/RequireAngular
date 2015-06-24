define(['angular', 'directives/directives'], function (angular, directives) {
    'use strict';

    var app = angular.module('hsaCalculator', []);
    app.directive('taxSavings', directives.taxSavings);
    app.directive('traditionalPlan', directives.tradPlan);

    app.init = function () {
        angular.bootstrap(document, ['hsaCalculator']);
    };

    return app;
});

