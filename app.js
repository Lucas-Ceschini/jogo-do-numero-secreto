alert('Boas vindas ao jogo do número secreto!');

let maxNumber = 100;
let numeroSecreto = parseInt(Math.random()*maxNumber)+1; // Gera números aleatórios
// Math.random() gera números de 0 a 1. Por isso, multiplicamos por 10.


let chute;
let tentativas = 1;

// O let serve para armazenar uma variável. 

console.log('O número secreto é (5)');

// console.log nos dá uma mensagem de texto no console do site. 

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e '+maxNumber);
    if (numeroSecreto == chute) {

        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que ${chute}`);
        }
        // A mudança do '' para o `` é importante nessa alteração.
        // estamos fazendo aqui o que no pyton seria f'mensagem {x}'
        // Pode-se utilizar o + também: alert('Você descobriu o número secreto' + numeroSecreto);
        //tentativas = tentativas + 1;
        tentativas++;
    }
} 


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);    
// }
