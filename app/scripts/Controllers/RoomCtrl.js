(function() {
  function RoomCtrl(Room, $uibModal, $scope) {
     $scope.allRooms = Room.all;
     $scope.rooms = this.rooms;    
  
        $scope.open = function() {
            var newChatRoomModal = $uibModal.open({
                templateUrl: '/templates/newroom.html',
                controller: 'ModalCtrl'
            });

            newChatRoomModal.result.then(function (newChatRoomName) {
                Room.addNewRoom(newChatRoomName);
            })
        } 
    
    }
  

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room','$uibModal', '$scope', RoomCtrl]);

})();