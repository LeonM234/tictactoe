;(function(turnCounter){
  'use strict';


  var turnCounter = 0;
  // click to append X or O depending on P1 or P2
  $('td').on('click', function(){
    if (turnCounter % 2 === 0){
      $(this).text("X").addClass("x");
    } else {
      $(this).text("O").addClass("o");
    }
   turnCounter++;
  });

}())
