# Tic Tac Toe
[Tic Tac Toe](https://armandoltx.github.io/tictactoe/index.html)

## Introduction

This is the first project I have to present on week three while I am attending to a Web Development Immerse course in its fithteen edition (WDI-15). We had four days to finish it.

## Goals

- Build a web application from scratch, without a starter codebase.
- Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
Separate HTML, CSS, and JavaScript files in your application.
- Build an application to a spec that someone else gives you.
- Build a dynamic game that allows two players to compete.
- Craft a readme.md file that explains your app to the world.

## Approach
When I had to think about the game, I was first trying to figure it out how the logic works in the game to translate it to JavaScript.
First I had to check who's turn it is, and choose the movement, when the player choose a box, the progam check if the box is empty and use it for the player, or let him know that box is occupied. After the player chooses an empty box, the program checks if he wins. If the player does not win it is the turn for the second player, so the program starts again by checking if the box is empty and the 2nd player has won. The program will stop when it finds out one of the players win.

After having the logic of the program working, I worked on the avatars. The game lets you choose your avatar and use your nickname, also It counts how many times any player wins.

Then I created more code to create the posibility of playing against the computer, by modifing the previous code to let the computer be the 2nd player. So the program itself checks the empty boxex and use one of them.

##Estructure

1. Choose Game, between 2 players or 1 player vs computer.
2 .Choose Avatar and Nickname.
3. Start Playing.
## Frameworks and Libraries
- HTML.
- CSS.
- JavaScript.
- Jquery.
- Sass.
- Google Fonts.
- CSS transitions.
