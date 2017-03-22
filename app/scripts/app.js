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
      }

      angular
        .module('blocChat', ['firebase', 'ui.router'])
        .config(config);
})()