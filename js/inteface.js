document.addEventListener('DOMContentLoaded', ()=>{

let squares = document.querySelectorAll('.square');

squares.forEach((square)=>{

    square.addEventListener('click', handleClick);
})
//

})

function handleClick(event){
    console.log(event.target)

    let square = event.target;
    let position = square.id;
   
  if(handleMove(position)) {
    
    setTimeout(()=>{alert('O jogo acabou, o vencedor foi' + playerTime)}, 10)
    
  };
   updateSquares();  
};
//



function updateSquares(){
    let squares = document.querySelectorAll('.square');


    squares.forEach((square)=>{

       let position = square.id; 
        let symbol = board[position]
        

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
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