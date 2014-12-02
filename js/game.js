;var game = (function(JQ){
  'use strict';
  
  // store variables
  var turnCounter = 0;

  var board = [[0, 0, 0]
               [0, 0, 0]
               [0, 0, 0]];

  var player1 = prompt("Player 1, what is your name?");

  var player2 = prompt("Player 2, what is your name?");

  // ----- UPDATE BOARD ARRAY -----
  if ($(this).hasClass("x")){ 
    board[boardY].splice(boardX, 1, 1);
  } else if ($(this).hasClass("o")){
    board[boardY].splice(boardX, 1, 2);
  }

 return {
    
    addXO: function(){
      $('td').on('click', function(){
      if (turnCounter % 2 === 0){
        $(this).text("X").addClass("x");
      } else {
        $(this).text("O").addClass("o");
      }
      return turnCounter++;
    });
  }
           
 // Check for horizontal 3 in a row
    // X or O

  // Check for vertical 3 in a row
    // X or O

  // Check for diagonal 3 in a row
    // X or O

  // Check for OTHER diagonal 3 in a row
    // X or O
 }

}(jQuery));
