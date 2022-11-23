let board = ['','','','','','','','',''] //para representar o tabuleio no js
let playerTime = 0; // esse define as vezes dos jogadores
let symbols = ['o', 'x'] //os simbolos que simbolizam os jogadores
let gameOver = false; // determina se o jogo acabou ou nao, quando falso. segue o jogo
let winStates = [
    [0,1,2],
    [3,4,5], // essas são todas as posibilidades de vitorias previstas no jogo
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//



function handleMove (position){  // a função que da vida ao jogo, ela recebe as posições la da interface quando ocorre a chamada dessa func

        if(gameOver){ // ele gameOver = false, segue o jogo, se nao bloqueia
            return;
        }

                if(board[position] == ''){ // verificando se o board esta vazio, para nao ficar trocando os simbolos
                    
                    board[position] = symbols[playerTime];

                    gameOver = isWin(); //toda vez que acontecer uma jogada, precisamos verificar se tem um vencedor

    
/* playerTime = (playerTime == 0 )?1 : 0;  */ 
                        if(!gameOver){ // essa veficação é sobre, o jogo só vai trocar de jogador quando for gameOver == false, senao nao troca

                            if(playerTime == 0){
                            playerTime = 1
                                }else{
                                    playerTime = 0
                                }
    }
}
            return gameOver; // retorna o novo valor de gameOver definido com isWin()
}

function isWin(){

// essa é toda a parte da logica do jogo da velha

                for(let i = 0; i < winStates.length; i++){
                    let seq = winStates[i];
                    let pos1 = seq[0];
                    let pos2 = seq[1];
                    let pos3 = seq[2];

                            if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
                                return true;
                            }
                    
// caso tudo isso bater como esta declarado, ele retorna um true, bloqueando o jogo
                }
        
    return false;
}