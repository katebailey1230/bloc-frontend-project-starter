(function() {
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
              controller: 'RoomCtrl as roomctrl',
              templateUrl: '/templates/home.html'
          })
        
         .state('newRoom', {
              url: '/newroom',
              controller: 'ModalCtrl as modalctrl',
              templateUrl: '/templates/NewRoom.html'
          });
      }

      angular
        .module('blocChat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
        .config(config);
})()