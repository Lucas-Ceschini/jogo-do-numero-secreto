let listaNumerosSorteados = [];
let maxNumber = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Famele', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${maxNumber}`);
}

exibirMensagemInicial();

// Criando função
function verificarChute() {
    let chute = document.querySelector('input').value; // Pega o valor que é inserido no css
    

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;

        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        tentativas++;
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O numero é menor do que o chute.');
        } else {
            exibirTextoNaTela('p','O numero é maior do que o chute.');
        }
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*maxNumber +1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista==3) {
        listaNumerosSorteados=[];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido); // Aqui se adiciona o numero na lista criada 
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementsById('reiniciar').setAttribute('disabled',true);
}