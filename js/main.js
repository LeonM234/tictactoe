$(document).ready(function(){

  $('td').on('click', function(){
    if ($(this).hasClass('occupied') === true){
      alert("Can't click here!");
      } else {
    game.addXO(this);
    game.updateBoardState(game.board, this);
    game.checkHorizontal(game.board);
    game.checkVertical(game.board);
    game.checkDiagonal1(game.board);
    game.checkDiagonal2(game.board);
    game.playerTurn();
    // game submit board (set)
    //
    }
  });

});

