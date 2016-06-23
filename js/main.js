$(document).ready(function() {
    // PLAYER 1: X
    // any time player one click on the div it will add a class call player1
    //check if player 1 can move there
    //check if there is any player1 or player2 class.
    //if there is any class ==> you cannot move there else id
    //$( "div where you click" ).addClass( "x" );
    // write a function to know when to use player 1 or player 2 to the event
    // so anytime player1 click the turn should be odd ans anytime player2 click turn shoud be even
    //================================
    //+++++++++Changing images++++++++
    //=================================
    //================================
    //+++++++++GLOBAL VARIABLES++++++++
    //=================================
    var namePlayer2;
    var namePlayer1;
    var turn = 0;
    var gameOver = false;
    var playerTurn = "player1";
    var playerImage = {
        player1: '',
        player2: '',
    };

    //================================
    //+++++++++SELECT PLAYER IMAGES++++++++
    //=================================
    //player 1 selecting the img
    $(".image-selection-one").on("click", function() {
        var imgIndex = $(this).index(); //select the index of the image
        $('.image-selection-two').eq(imgIndex).hide(); // finding that image in the second player div and hiding it
        //adding the image to the player in the score area
        namePlayer1 = $(".input-one").val();
        var $img = $('<img>').attr('src', $(this).attr('src'));
        $('#player1Score').text(namePlayer1);
        $('#player1ScoreImg').append($img);

        player = 'player1';
        playerImage[player] = $(this).attr('src');
        $('.setplayer1').addClass('invisible');
        console.log('testing image');
    });
    //player 2 selecting the img
    $(".image-selection-two").on("click", function() {
        $("#player2Score").val(".input-one");
        //adding the image to the player in the score area
        namePlayer2 = $(".input-two").val();
        var $img = $('<img>').attr('src', $(this).attr('src'));
        $('#player2Score').text(namePlayer2);
        $('#player2ScoreImg').append($img);
        player = 'player2';
        playerImage[player] = $(this).attr('src');
        $('.setplayer2').addClass('invisible');
        console.log('testing image');
    });


    //================================
    //+++++++++SELECT PLAYER TURN++++++++
    //=================================
    var newTurn = function() { // to check who has to go
        if ((turn % 2 === 0) && (turn < 8)) {
            playerTurn = "player2"; //player2 goes
        } else if ((turn % 2 !== 0) && (turn < 8)) {
            playerTurn = "player1"; //player1 goes

        } else {
            $("#result").text("both of you have no idea how to play!");

            console.log('both of you have no idea how to play');
            // restart(); NEED TO ADD A BUTTON OR SOEMTHING TO CALL RESTART FROM

        }
        turn += 1; // increments anytime the player clicks
    };

    //================================
    //+++++++++SELECT PLAYER SQUARE++++++++
    //=================================
    $('.square').on('click', function() { //it is to click in every object in that array
        //checking weather the class player 1 or player 2 is added to see if the box is already taken
        if (gameOver === false) { //to check if anyone won and stop the game
            if ($(this).hasClass("player1") || $(this).hasClass("player2")) {
                console.log('not in this box');
            } else {
                //because the box is not taken you can add a class to take it
                //============== adding class to the div
                $(this).addClass(playerTurn);
                $(this).css("background-image", "url('" + playerImage[playerTurn] + "')");

                // this is taking one object with the class square any time you click, before I tryed with .square instead of this and it added the class player 1 in all the divs
                //============check winner with a function
                checkWinner();
                //==========to check the turn
                newTurn();
            }
        }
    });

    //================================
    //+++++++++CHECK WINNER++++++++
    //=================================
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
            console.log('Joel is the best in the world');
            $('.img').addClass('photo1');
            $("#result").text(namePlayer1 + ", you are the best in the world!");
            $("#player1Score").append('<img src="img/star.png" alt="">');
            $(".winner").append('<img src="https://media.giphy.com/media/11tsxnToGxblvO/giphy.gif" alt="">');

            gameOver = true;

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
            console.log('Chris 2 is the best in the world');
            $("#result").text(namePlayer2 + ", you are the best in the world!");
            $("#player2Score").append('<img src="img/star.png" alt="">');
            $(".winner").append('<img src="https://media.giphy.com/media/11tsxnToGxblvO/giphy.gif" alt="">');


            gameOver = true;
        }

    };

    //================================
    //+++++++++RESTART THE GAME++++++++
    //=================================
    // to restart the game when is finished
    var restart = function() {
        turn = 0;
        playerTurn = "player1";
        gameOver = false;
        $(".square").removeClass('player1').css("background-image", "");
        $(".square").removeClass('player2').css("background-image", "");
        console.log(gameOver);
        // remove the child image of .winner
        $('.winner').empty();
        $("#result").empty();

    };
    // creating a button to restart
    $(".restartbutton").on("click", function() {
        console.log('auwhef');
        restart();
    });

});
