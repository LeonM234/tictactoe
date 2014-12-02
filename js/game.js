;var game = (function(){
  'use strict';

  // create board in JS??
  
  // board representation
  var board = [[0, 0, 0]
               [0, 0, 0]
               [0, 0, 0]];

  // Add player1 via prompt for Firebase
  var player1 = prompt("Player 1, what is your name?");

  // Add player 2 via prompt for Firebase
  // var turnCounter = 0;
  // ----- UPDATE BOARD ARRAY -----
  if ($(this).hasClass("x")){ 
    board[boardY].splice(boardX, 1, 1);
  } else if ($(this).hasClass("o")){
    board[boardY].splice(boardX, 1, 2);
  }

  // Check for 3 in a row
    // if board[x][y] == 2 && board[x+1][y] == 2 etc
    // game over, player 1 or 2 wins! 
  

}())
