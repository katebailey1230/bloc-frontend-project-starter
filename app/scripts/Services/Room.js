(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();