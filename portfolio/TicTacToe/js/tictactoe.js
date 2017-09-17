/*
 * Tic Tac Toe scripts, May 2017
 * Daniel Dias
 */

/* The board variable is being created as an array containing all the table cells. 
 * That variable will be used later to check if one of the players won the game.
 */
var board = document.getElementsByTagName("td");

// assuming we index the 9 tic tac toe cells from left to right, top to
// bottom, as 0-8, these would be all of the winning combinations:
var winSets = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// X always gets to go first
var player = "X";

// keep track of how many cells are empty at any time
var empty = 9;

// keep track of game status - false if still playing
var gameOver = false;

// store number of winning for each player;
var winX = 0;
document.getElementById("winX").innerHTML = winX;
var winY = 0;
document.getElementById("winY").innerHTML = winY;

/* Function resetGame() is called when user clicks on the "game reset" button. 
 */
function resetGame() {
    /* Reset the backgound color of all the cells */
    for (i = 0; i < board.length; i++) {
        board[i].style.background="white";
    }
    /* The player message appear after the game is started */
    document.getElementById("playerGo").style.display = "inline";
    /* The Math.random() function is used to generate a number between 1 and 3(not inclusive)
    The Math.floor() function is used to take just the integer part of the number
    Using these functions, the player variable will be randomly assigned the value 1 or 2, which will make the starting player random. */
    player = Math.floor(Math.random() * (3-1) + 1);
    player = (player===1) ? "X" : "O";
    /* Change the message indicating which player starts the game */
    document.getElementById("playerMessage").innerHTML = " Go!";
    document.getElementById("player").innerHTML = player;
    /* Change the button text from "Start the Game" to "Reset Game" */
    document.getElementById("reset").innerHTML = "Reset Game";
    /* Change the variable gameOver to false to start a new game */
    gameOver = false;   
    /* Change the number of empty cells to 9, meaning that all cells are empty */
    empty = 9;
    /* Clear the content of all cells */
    for (i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
    }
}

/* Function cellClicked() is called
 when the user clicks on one of the nine cells of the board
 
 */
function cellClicked(cell) {
    /* Reset the backgound color of all the cells */
    for (i = 0; i < board.length; i++) {
        board[i].style.background="white";
    }
    /* Check if the game is still going before allowing the user to click */
    if (!gameOver) {
        /* Check if the cell is empty before allowing the user to click */
        if (cell.innerHTML === "") {
            /* Fill the cell with the "X" or "O" */
            cell.innerHTML = player;
            /* Decrease the number of empty cells */
            empty -= 1;
            /* Run the checkWin() function to see if the game has a winner */
            checkWin();
            /* Check with player is currently playing and change to the other */
            player = (player === "X") ? "O" : "X";
            document.getElementById("player").innerHTML = player;
            /* Change the background of the selected cell */
            cell.style.background="lightgrey";
        }
    }
}

/* Function checkWin() is called to check all winning combinations and display results
The function will first check if the first cell of the combination is not empty. Then, will compare 
the first cell with the second, and then the second cell with the third.
If the result is true, will change the winning message with the winning player and display it.
 */
function checkWin() {
    for (i = 0; i < winSets.length; i++) {
        if (board[winSets[i][0]].innerHTML !== "" && board[winSets[i][0]].innerHTML === board[winSets[i][1]].innerHTML
                && board[winSets[i][1]].innerHTML === board[winSets[i][2]].innerHTML) {
            /* Change the gameOver variable to true to stop the game */
            gameOver = true;
            /* Change the winning message to show which won and then display it */
            document.getElementById("winner").innerHTML = "Player " + player + " won!!";
            displayWin("show");
            /* Verify with player is active when someone won the game, and increase his scoreboard */
            if (player==="X") {
                winX+=1;
                document.getElementById("winX").innerHTML = winX;
            } else {
                winY+=1;
                document.getElementById("winY").innerHTML = winY;
            }
            break;
        }
    }
    /* Check if the are no empty cells and the game has no winner */
    if (empty === 0 && !gameOver) {
        /* Change the gameOver variable to true to stop the game */
        gameOver = true;
        /* Change the winning message to informe that the game has no winner and display it */
        document.getElementById("winner").innerHTML = "No one wins!";
        displayWin("show");
    }
}


/* Enhancements you can try:
 - highlight (change background colour) of the cell that was just clicked to indicate that it was the last move; make sure it goes back to the regular background when the next user clicks
 - make the starting player random
 - keep track of statistics (how many times each player wins)
 - hide the "Player X Go!" on startup; show it only while game is playing
 */

// ==========================================================================
// DON'T TOUCH THESE LINES OF CODE  (we'll learn this stuff in a later lesson)
document.getElementById("reset").addEventListener("click", resetGame);
document.getElementById("message").addEventListener("click", function () {
    displayWin(false);
});
for (i = 0; i < board.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function () {
        cellClicked(this);
    });
}
function displayWin(show) {
    if (show) {
        document.getElementById("message").style.display = "block";
        document.getElementById("overlay").style.display = "block";
    } else {
        document.getElementById("message").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }
}
// ===============================================================
