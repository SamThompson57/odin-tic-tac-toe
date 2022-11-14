const gameStates = (() => {
    const board = [0,0,1,0,-1,-1,0,1,0];
    const currentTurn = 1;
    return {board, currentTurn};
})();

const buttonAdd = document.querySelectorAll('.square');
console.log(buttonAdd.length);

buttonAdd.forEach((element) => {
    element.addEventListener('click',() => {
        console.log(element.id)
    })
})

function draw(){
    gameStates.board.forEach((element, index) => {
        const drawTarget = document.querySelector(`#s${index}`)
        console.log(drawTarget.id)
        switch(element){
            case 0:
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