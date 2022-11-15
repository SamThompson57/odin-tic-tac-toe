const gameStates = (() => {
    let board = [0,0,0,0,0,0,0,0,0];
    let currentTurn = 1;
    let turnCounter = 0
    let gameOver = false
    function reset() {
        gameStates.board = [0,0,0,0,0,0,0,0,0];
        gameStates.currentTurn = 1;
        gameStates.turnCounter = 0;
        gameStates.gameOver = false;
        draw();
    }
    function winCheck() {
        console.log("Winner Check")
        console.log(gameStates.board)
        const checkState = gameStates.board
        console.log(checkState)
        if(checkState[0] != 0){
            if(checkState[0] == checkState[1] && checkState[0] == checkState[2]){
            console.log('WINNER');
            gameStates.gameOver = true;
            return
        }else if(checkState[0] == checkState[3] && checkState[0] == checkState[6]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }else if(checkState[0] == checkState[4] && checkState[0] == checkState[8]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }}if(checkState[4] != 0){
            if(checkState[3] == checkState[4] && checkState[3] == checkState[5]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }else if(checkState[1] == checkState[4] && checkState[1] == checkState[7]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }else if(checkState[2] == checkState[4] && checkState[2] == checkState[6]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }}if(checkState[6] != 0){
            if(checkState[6] == checkState[7] && checkState[6] == checkState[8]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }}if(checkState[2] != 0){
            if(checkState[2] == checkState[5] && checkState[2] == checkState[8]){
            console.log('WINNER')
            gameStates.gameOver = true;
            return
        }}
        if(gameStates.turnCounter == 9){
            console.log('TIE')
            gameStates.gameOver = true;
        }
    }
    return {board, currentTurn, turnCounter, reset, winCheck, gameOver};
})();

const buttonAdd = document.querySelectorAll('.square');
console.log(buttonAdd.length);

buttonAdd.forEach((element) => {
    element.addEventListener('click',() => {
        console.log(Number(element.id.slice(-1)))//This goves the target for the button pressed
        if(gameStates.board[Number(element.id.slice(-1))]=== 0 && gameStates.turnCounter < 9 && gameStates.gameOver == false){
            gameStates.board[Number(element.id.slice(-1))] += gameStates.currentTurn;
            gameStates.currentTurn *= -1;
            gameStates.turnCounter++;
            draw();
            if(gameStates.turnCounter > 4){
                console.log("checking for winner")
                gameStates.winCheck()
            }
        }
        
    })
})

function draw(){
    gameStates.board.forEach((element, index) => {
        const drawTarget = document.querySelector(`#s${index}`)
        console.log(drawTarget.id)
        switch(element){
            case 0:
                drawTarget.textContent = '';
                break;
            case 1:
                console.log(element)
                drawTarget.textContent = 'X';
                break;
            case -1:
                console.log(element)
                drawTarget.textContent = 'O';
                break;
        } 
    });
}

/*
Build the logic that checks for when the game is over! 
Should check for 3-in-a-row and a tie.

Clean up the interface to allow players to put in their names, 
include a button to start/restart the game and add a display element that congratulates the winning player!

Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!

    - Start by just getting the computer to make a random legal move.

    - Once you’ve gotten that, work on making the computer smart. 
    It is possible to create an unbeatable AI using the minimax algorithm */ 