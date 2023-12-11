let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

// Função que retorna um valor
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if (numerosSorteados.length == numeroLimite) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        console.log(numeroEscolhido);
        return numeroEscolhido;
    }
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Função com parâmetros
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial();
// Função sem parâmetro, nem retorno
function verificarChute() {
    chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        limparCampo();
    } tentativas ++;
} 

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    limparCampo();
}
