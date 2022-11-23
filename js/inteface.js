document.addEventListener('DOMContentLoaded', ()=>{

let squares = document.querySelectorAll('.square');

squares.forEach((square)=>{ // faz uma varredura de array 

    square.addEventListener('click', handleClick); // para cada quadrado, faz um handleClick
})
//

})

function handleClick(event){ // recebe evento
    console.log(event.target)

    let square = event.target; // retorna local clicado
    let position = square.id; // retorna id do local clicado
   
  if(handleMove(position)) { //chamada do handleMove levando o position, se o handleMove for verdadeiro é pq teve gameover
    // pq, como estamos retornando o gameOver la no game, o hadlemove tem valor gameover true tbm
    setTimeout(()=>{alert('O jogo acabou, o vencedor foi' + playerTime)}, 10) // criado um intevalo para o alert
    
  };
   updateSquares();  // depois do clique ele precisa ser atualizado na tela
};
//

function updateSquares(){
    let squares = document.querySelectorAll('.square');
//re define squares

    squares.forEach((square)=>{

       let position = square.id; 
        let symbol = board[position] // pega a posição aonde o codigo colocou o x ou o do jogo
        

        if(symbol != ''){ // se o board position for diferente de vazio, ele imprime
            square.innerHTML = `<div class='${symbol}'></div>` // imprime uma classe com o symbolo
        }


    })

}








/*  

para verificar um só square ao inves de todos

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[square.id]
     square.innerHTML = `<div class='${symbols}'></div>`
}


*/