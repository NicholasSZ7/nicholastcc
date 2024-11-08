let tabuleiro = ['', '', '', '', '', '', '', '', ''];
let jogadorAtual = 'X';
let modoJogo = '';
let jogoAtivo = true;

function iniciarJogo(modo) {
    modoJogo = modo;
    tabuleiro = ['', '', '', '', '', '', '', '', ''];
    jogadorAtual = 'X';
    jogoAtivo = true;
    document.getElementById('tabuleiro').innerHTML = '';
    document.getElementById('mensagem').innerText = `Modo: ${modo === '2jogadores' ? 'Dois Jogadores' : 'Contra Máquina'}`;

    // Cria o tabuleiro
    for (let i = 0; i < 9; i++) {
        const celula = document.createElement('div');
        celula.classList.add('celula');
        celula.setAttribute('data-index', i);
        celula.addEventListener('click', () => fazerJogada(i));
        document.getElementById('tabuleiro').appendChild(celula);
    }
}

function fazerJogada(index) {
    if (!jogoAtivo || tabuleiro[index] !== '') return;

    tabuleiro[index] = jogadorAtual;
    document.querySelector(`.celula[data-index='${index}']`).innerText = jogadorAtual;
    document.querySelector(`.celula[data-index='${index}']`).classList.add('ocupada');

    if (verificarVencedor()) {
        document.getElementById('mensagem').innerText = `Jogador ${jogadorAtual} venceu!`;
        jogoAtivo = false;
        return;
    }

    if (!tabuleiro.includes('')) {
        document.getElementById('mensagem').innerText = 'Empate!';
        jogoAtivo = false;
        return;
    }

    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';

    if (modoJogo === 'contraMaquina' && jogadorAtual === 'O') {
        jogadaDaMaquina();
    }
}

function jogadaDaMaquina() {
    setTimeout(() => {
        let index;
        do {
            index = Math.floor(Math.random() * 9);
        } while (tabuleiro[index] !== '');

        fazerJogada(index);
    }, 500);
}

function verificarVencedor() {
    const combinacoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combinacao of combinacoesVitoria) {
        const [a, b, c] = combinacao;
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            return true;
        }
    }
    return false;
}
