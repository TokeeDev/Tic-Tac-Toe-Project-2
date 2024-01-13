const board = document.getElementById("board");
const cell = document.getElementsByClassName("cellContainer");
const players = ["X", "O"];
//starts with player X
let currentPlayer = players[0];
//end message 
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.marginTop = '495px'
endMessage.style.marginLeft = "2.5%"
endMessage.style.textAlign='center'
board.after(endMessage)
//winning combinations
const winningCombos =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
//this section allows people to play the game 
for(let i = 0; i < cell.length; i++){
    cell[i].addEventListener("click", () => {
        if(cell[i].textContent !== ''){
            return 
        }
        cell[i].textContent = currentPlayer
        if(checkWin(currentPlayer)){
            endMessage.textContent=`Game Over! ${currentPlayer} Wins!`
            return
        }
        if(checkTie()){
            endMessage.textContent = "Game over, Tied!"
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0]
        if(currentPlayer == players[0]) {
            endMessage.textContent = `X's Turn!`
        } else {
            endMessage.textContent = `O's turn!`
        }
    })
}

//function that checks if someone won
function checkWin(currentPlayer) {
    for(let i = 0; i < winningCombos.length; i++){
        const [a, b, c] = winningCombos[i]
        if(cell[a].textContent === currentPlayer && cell[b].textContent == currentPlayer && cell[c].textContent == currentPlayer){
            return true
        }
    }
    return false
}
//function that check if the game is a tie
function checkTie() {
    for(let i = 0; i < cell.length; i++){
        if(cell[i].textContent === ""){
            return false
        }
    }
    return true
}
//function that restarts the game and starts everything off fresh
function restartBtn() {
    for(let i = 0; i < cell.length; i++){
        cell[i].textContent = '';
    }
    endMessage.textContent = `"X's Turn!"`
    currentPlayer = players[0]
}







