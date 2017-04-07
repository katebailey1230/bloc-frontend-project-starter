(function() {
  function RoomCtrl(Room, Message, $uibModal, $cookies){
    var home = this;
    this.rooms = Room.all;
    this.currentRoom = null;
    this.currentUser = $cookies.get('blocChatCurrentUser');
    
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
   
    this.sendMessage = function () {
            this.newMessage.roomId = this.currentRoom.$id;
            this.newMessage.username = this.currentUser;
            Message.send(this.newMessage);
    }
    
  }
  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);

})();