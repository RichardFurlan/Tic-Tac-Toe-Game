document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach ((square) =>{
        square.addEventListener('click', handleClick)

    })


})

let Btnrefresh = document.getElementById("btn")

function handleClick(event){

    let square = event.target;

    let position = square.id;

    if (handleMove(position)){
        updateScore();
        setTimeout(() =>{
            if(playerTime == 0){
                symbolMensagem = ' 🪓'
                alert("O Jogo Acabou - O vencedor foi o Player 1 " + symbolMensagem)
            }else{
                symbolMensagem = ' 🗡️'
                alert("O Jogo Acabou - O vencedor foi o Player 2" + symbolMensagem)
            }
            Btnrefresh.className = "display";
        },15)
        
        
    } else if(checkDraw()){
        setTimeout(() =>{
            alert("Empatou");
            Btnrefresh.className = "display";
        },15)
    };
    updateSquares(position);
}

function updateSquares(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class = '${symbol}'></div> `

}

function restart(){
    resetGame();
    clearBoard();

    Btnrefresh.className = "hidden";
}

function clearBoard(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{

        let position = square.id
        let symbol = ""

        square.innerHTML = `<div class="${symbol}"></div>`
        // square.style.backgroundColor = 'rgba(21, 28, 49, 0.664)';   

    })

}
function updateScore(){
    player1.innerHTML = `<span class="icon1">🪓</span>
    <span id="scoreP1">${scores[0].toString()}</span>`;

    player2.innerHTML = `<span class="icon2">🗡️</span>
    <span id="scoreP2">${scores[1].toString()}</span>`;

}



