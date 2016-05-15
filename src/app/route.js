angular.module('sagremorApp')
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        
        $stateProvider
            .state('dashboard', {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginCtrl'
            })
            .state('switches', {
                url: '/switches',
                templateUrl: 'app/switches/switches.html',
                controller: 'switchesCtrl',
                controllerAs: 'switchesCtrl'
            })
            .state('heaters', {
                url: '/heaters',
                templateUrl: 'app/heaters/heaters.html'
            })
            .state('sensors', {
                url: '/sensors',
                templateUrl: 'app/sensors/sensors.html'
            })
            .state('cameras', {
                url: '/cameras',
                templateUrl: 'app/cameras/cameras.html'
            })
            .state('music', {
                url: '/music',
                templateUrl: 'app/music/music.html'
            })
            .state('maps', {
                url: '/maps',
                templateUrl: 'app/maps/maps.html'
            })
            .state('weather', {
                url: '/weather',
                templateUrl: 'app/weather/weather.html'
            })
            .state('scripts', {
                url: '/scripts',
                templateUrl: 'app/scripts/scripts.html'
            })
            .state('events', {
                url: '/events',
                templateUrl: 'app/events/events.html'
            })
            .state('monitors', {
                url: '/monitors',
                templateUrl: 'app/monitors/monitors.html'
            })
            .state('logs', {
                url: '/logs',
                templateUrl: 'app/logs/logs.html'
            })
            .state('parameters', {
                url: '/parameters',
                templateUrl: 'app/parameters/parameters.html',
                controller: 'ParametersCtrl',
                controllerAs: 'ParametersCtrl'
            });
            
        $urlRouterProvider.otherwise('/');
    });
