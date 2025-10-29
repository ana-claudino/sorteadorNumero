function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    if (de >= ate) {
        alert('Erro! Campo "Do número" deve ser menor que "Até o número". Verifique os dados inseridos"');
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Erro! A quantidade de números a ser sorteada é menor que o intervalo de números disponível!');
        return;
    }
    
    let sorteados = [];
    let numeroGerado;

    for (let i = 0; i < quantidade; i++) {
        numeroGerado = gerarNumeroAleatorio(de, ate);
        sorteados.push(numeroGerado);
        
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
        alterarStatusBotao();

        while (sorteados.includes(numeroGerado)) {
            numeroGerado = gerarNumeroAleatorio(de, ate);
        }
        
        sorteados.push(numeroGerado);
    }

}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
                botao.classList.remove('container__botao');
                botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao;

}

