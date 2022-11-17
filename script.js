const gameStates = (() => {
    let board = [0,0,0,0,0,0,0,0,0];
    let currentTurn = 1;
    let turnCounter = 0
    let gameOver = false
    const announce = document.querySelector(".announcements")
    function reset() {
        gameStates.board = [0,0,0,0,0,0,0,0,0];
        gameStates.currentTurn = 1;
        gameStates.turnCounter = 0;
        gameStates.gameOver = false;
        announce.textContent = "";
        draw();
    }
    function winner(winnercode){
        const winner = winnercode > 0 ? p1.playerName : p2.playerName
        console.log('WINNER')
        gameStates.gameOver = true;
        announce.textContent = `CONGRATULATIONS ${winner}!`
    }
    function winCheck() {
        console.log("Winner Check")
        console.log(gameStates.board)
        const checkState = gameStates.board
        console.log(checkState)
        if(checkState[0] != 0){
            if(checkState[0] == checkState[1] && checkState[0] == checkState[2]){
            gameStates.winner(checkState[0])
            return
        }else if(checkState[0] == checkState[3] && checkState[0] == checkState[6]){
            gameStates.winner(checkState[0])
            return
        }else if(checkState[0] == checkState[4] && checkState[0] == checkState[8]){
            gameStates.winner(checkState[0])
            return
        }}if(checkState[4] != 0){
            if(checkState[3] == checkState[4] && checkState[3] == checkState[5]){
                gameStates.winner(checkState[3])
            return
        }else if(checkState[1] == checkState[4] && checkState[1] == checkState[7]){
            gameStates.winner(checkState[1])
            return
        }else if(checkState[2] == checkState[4] && checkState[2] == checkState[6]){
            gameStates.winner(checkState[2])
            return
        }}if(checkState[6] != 0){
            if(checkState[6] == checkState[7] && checkState[6] == checkState[8]){
            gameStates.winner(checkState[6])
            return
        }}if(checkState[2] != 0){
            if(checkState[2] == checkState[5] && checkState[2] == checkState[8]){
            gameStates.winner(checkState[2])
            return
        }}
        if(gameStates.turnCounter == 9){
            announce.textContent = `THE GAME IS A TIE`
            gameStates.gameOver = true;
        }
    }
    return {board, currentTurn, turnCounter, reset, winCheck, gameOver, winner};
})();


const playerFactory = (playerName, seat) => {
    const playerTag = document.querySelector(`.player${seat}`)
    function changeName(newName){
        playerTag.textContent = newName;
        this.playerName = newName;
    }
        
    return {playerName, seat, changeName}
}
const p1 = playerFactory("PLAYER 1", 1)
const p2 = playerFactory("PLAYER 2", 2)

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
Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!

    - Start by just getting the computer to make a random legal move.

    - Once you’ve gotten that, work on making the computer smart. 
    It is possible to create an unbeatable AI using the minimax algorithm */ 