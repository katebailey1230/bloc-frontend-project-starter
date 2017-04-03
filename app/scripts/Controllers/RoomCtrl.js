(function() {
  function RoomCtrl(Room, $uibModal){
     this.rooms = Room.all;
         this.addRoom = function() {
             $uibModal.open({
                 templateUrl: '/templates/newroom.html',
                 size: 'sm',
                 controller: 'ModalCtrl as modal'
             });
         }
      }
  
  angular
    .module('blocChat')
    .controller('RoomCtrl', ['Room','$uibModal', RoomCtrl]);

})();