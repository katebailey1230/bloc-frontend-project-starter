(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var addRoom = function(newRoom) {
      rooms.$add({ name: newRoom});
    }
    
    return {
      all: rooms
      createRoom: addRoom
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();