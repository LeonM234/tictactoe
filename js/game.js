var game = (function(jQ){
  'use strict';
  
  var turnCounter = 0;
  // var players

// ----- FUNCTIONS TO RETURN TO MAIN.JS -----
 return {
   
    board: [["", "", ""],["", "", ""],["", "", ""]],

    // increment turn counter
    playerTurn: function(){
      turnCounter++;
    },
    
    // add x/o to the board
    addXO: function(td){
      if (turnCounter % 2 === 0){
        $(td).text("X").addClass("occupied");
      } else {
        $(td).text("O").addClass("occupied");
      }
    },
 
    // push to fb initial board state
    updateBoardState: function(board, td){
      var vertical = Math.floor($(td).parent().index());
      var horizontal = $(td).index();
      console.log(vertical);      
      if (turnCounter % 2 === 0){
        var x = $(td).text("X");
        board[vertical][horizontal] = "X";
      } else{
        $(td).text("O");
        board[vertical][horizontal] = "O";
      }
    },

    //fb (board) (put it up);

    // Check for horizontal win - 3 in a row
    checkHorizontal: function(board) {
      for(var i = 0; i < 3; i++){
        if(board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          if(board[i][0] === "X"){
            alert("Player X wins!");
          } else if (board[i][0] === "O") {
            alert("Player O wins!");
          }
        }
      }
    },

    // Check for vertical win - 3 in a row
    checkVertical: function(board) {
      for(var i = 0; i < 3; i++){
        if(board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
          if(board[0][i] === "X"){
            alert("Player X wins!");
          } else if (board[0][i] === "O") {
            alert("Player O wins!");
          }
        }
      }
    },
    
    // Check for diagonal win - 3 in a row
    checkDiagonal1: function(board){
      if(board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        if(board[0][0] === "X"){
          alert("Player X wins!");
        } else if (board[0][0] === "O") {
          alert("Player O wins!");
        }
      }
    },

    // Check for OTHER diagonal win - 3 in a row
    checkDiagonal2: function(board){
      if(board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        if(board[0][2] === "X"){
          alert("Player X wins!");
        } else if (board[0][2] === "O") {
          alert("Player O wins!");
        }
      }
    }

  // update player turn / increment turn counter

 }

}(jQuery));
