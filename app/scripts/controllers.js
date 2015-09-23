angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('StreamController', function() {

var isPlaying = false;
var stream;

var vm = angular.extend(this, {
  togglePlay: togglePlay,
  isPlaying: isPlaying
});
// ********************************************************************

function togglePlay() {
  if (vm.isPlaying) {
    pause();
  } else {
    play();
  }

  vm.isPlaying = isPlaying = !isPlaying;
}

function play() {
  try {
    stream = new window.Stream('http://stream-dc1.radioparadise.com/mp3-128');
    // Play audio
    stream.play();

  } catch (Error) {
    alert(Error);
  }
}

function pause() {
  if (!stream) {
    return;
  }

  stream.stop();
}
});
