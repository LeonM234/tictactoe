var fire = (function(jQ){
  'use strict';

  var gameRef = new Firebase('https://nsstictactoe.firebaseio.com/');

  return {
    setFbVariables: function(board/*, turnCounter*/){
      gameRef.set({board: board/*, turnCounter: turnCounter*/});
    }
  }

}(jQuery));
