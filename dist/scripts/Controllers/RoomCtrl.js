(function() {
  function RoomCtrl(Room, Message, $uibModal, $cookies){
    var home = this;
    this.rooms = Room.all;
    this.currentRoom = null;
    
    this.addRoom = function() {
        $uibModal.open({
          templateUrl: '/templates/newroom.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        });
       }
  
    this.setCurrentRoom = function(room){
      this.currentRoom = room;
      this.messages = Message.getByRoomId(this.currentRoom.$id);
    };
    
  };
  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);

})();