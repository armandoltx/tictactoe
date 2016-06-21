$(document).ready(function() {
    // PLAYER 1: X
    // any time player one click on the div it will add a class call player1
    //check if player 1 can move there
    //check if there is any player1 or player2 class.
    //if there is any class ==> you cannot move there else id
    //$( "div where you click" ).addClass( "x" );
    // write a function to know when to use player 1 or player 2 to the event
    // so anytime player1 click the turn should be odd ans anytime player2 click turn shoud be even
    var turn = 0;
    var playerTurn = ['player1', 'player2'];
    var newTurn = function() { // to check who has to go
        turn += 1; // increments anytime the player clicks
        if ((turn % 2 === 0) && (turn <= 9)) {
            playerTurn = "player2"; //player2 goes
        } else if ((turn % 2 !== 0) && (turn <= 9)) {
            playerTurn = "player1"; //player1 goes

        } else {
            console.log('both of you have no idea how to play');
        }
    };
    //=========checking if we can click on that box
    $('.square').on('click', function() { //it is to click in every object in that array
        //checking weather the class player 1 or player 2 is added to see if the box is already taken
        if ($(this).hasClass("player1") || $(this).hasClass("player2")) {
            console.log('not in this box');
        } else {
            //because the box is not taken you can add a class to take it
            //============== adding class to the div
            $(this).addClass(playerTurn); // this is taking one object with the class square any time you click, before I tryed with .square instead of this and it added the class player 1 in all the divs
            //============check winner with a function
            checkWinner();
            //==========to check the turn
            newTurn();
        }
    });
    var checkWinner = function() {
        if ( // checking if player 2 wins
            ($("#one").hasClass("player1") && $("#two").hasClass("player1") && $("#three").hasClass("player1")) ||
            ($("#four").hasClass("player1") && $("#five").hasClass("player1") && $("#six").hasClass("player1")) ||
            ($("#seven").hasClass("player1") && $("#eight").hasClass("player1") && $("#nine").hasClass("player1")) ||
            ($("#one").hasClass("player1") && $("#four").hasClass("player1") && $("#seven").hasClass("player1")) ||
            ($("#two").hasClass("player1") && $("#five").hasClass("player1") && $("#eight").hasClass("player1")) ||
            ($("#three").hasClass("player1") && $("#six").hasClass("player1") && $("#nine").hasClass("player1")) ||
            ($("#one").hasClass("player1") && $("#five").hasClass("player1") && $("#nine").hasClass("player1")) ||
            ($("#three").hasClass("player1") && $("#five").hasClass("player1") && $("#seven").hasClass("player1"))
        ) {
            console.log('player 1 is the best in the world');
        } else if ( // checking if player 2 wins
            ($("#one").hasClass("player2") && $("#two").hasClass("player2") && $("#three").hasClass("player2")) ||
            ($("#four").hasClass("player2") && $("#five").hasClass("player2") && $("#six").hasClass("player2")) ||
            ($("#seven").hasClass("player2") && $("#eight").hasClass("player2") && $("#nine").hasClass("player2")) ||
            ($("#one").hasClass("player2") && $("#four").hasClass("player2") && $("#seven").hasClass("player2")) ||
            ($("#two").hasClass("player2") && $("#five").hasClass("player2") && $("#eight").hasClass("player2")) ||
            ($("#three").hasClass("player2") && $("#six").hasClass("player2") && $("#nine").hasClass("player2")) ||
            ($("#one").hasClass("player2") && $("#five").hasClass("player2") && $("#nine").hasClass("player2")) ||
            ($("#three").hasClass("player2") && $("#five").hasClass("player2") && $("#seven").hasClass("player2"))
        ) {
            console.log('player 2 is the best in the world');
        }

    };

});
