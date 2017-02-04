myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  function config($stateProvider, $locationProvider) {
        
        $locationProvider
            .html5Mode ({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('rooms', {
                url: '/',
                controller: 'RoomsCtrl as roomsctrl',
                templateUrl: '/templates/home.html'
        })
        
            .state('create', {
                url: '/create',
                templateUrl: 'templates/NewRoom.html',
                controller: 'RoomsCtrl as roomsctrl'
        })
      }
    })

angular
        .module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'ngSanitize'])
        .config(config);
})()