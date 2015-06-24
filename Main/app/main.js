﻿require.config({
    paths: {
        'angular': '../libraries/angular/angular'
        //'ngResource': '../components/angular-resource/angular-resource',
        //'ngCookies': '../components/angular-cookies/angular-cookies',
        //'ngProgressLite': '../components/ngprogress-lite/ngprogress-lite'
    },
    shim: {
        //ngResource: {
        //    deps: ['angular'],
        //    exports: 'angular'
        //},
        //ngCookies: {
        //    deps: ['angular'],
        //    exports: 'angular'
        //},
        //ngProgress: {
        //    deps: ['angular'],
        //    exports: 'angular'
        //},
        angular: {
            exports: 'angular'
        }
    },
    baseUrl: '/app'
});

require(['app'], function (app) {
    app.init();
});