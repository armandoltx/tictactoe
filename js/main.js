$(document).ready(function() {

    // PLAYER 1: X
    // any time player one click on the div it will add a class call 'x'
    //check if player 1 can move there
    //check if there is any x or o class.
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
            console.log(playerTurn = 'game over');
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
            newTurn();
        }
    });


    // to do that we have to check if the box has any of the classes

});





// $('#two').on('click', function() {
//     $("div #two").addClass("player1");
// });
// $('#three').on('click', function() {
//     $('div #three').addClass('player1');
// });



//
// $(".square").on("click", function() {
//     //add class






// change turn

// Check whose turn it is


// Let that player take a go


// Check to see if the square they've tried to take is vacant?


// CHeck to see if they've won

// IF NOT - then change turns


// use player1 or player2 instead x or o for class
// check if there is any movement left
//create a function checking for each div
//check if there is any div with no class x or o

// PLAYER 1: X
// any time player one click on the div it will add a class call 'x'
//check if player 1 can move there
//check if there is any x or o class.
//if there is any class ==> you cannot move there else id
//$( "div where you click" ).addClass( "x" );

// check if player one wins:
//  checking that there are 3 in a row with the class x or diagonal or in a column
// if there is not, it turns to player 2

// PLAYER 2: O
// any time player two click on the div it will add a class call '0'
//$( "div where you click" ).addClass( 'o' );
// check if player two wins:
//  checking that there are 3 in a row with the class x or diagonal or in a column
// if there is not, it turns to player 1
