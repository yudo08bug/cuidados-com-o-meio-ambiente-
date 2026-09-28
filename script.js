const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a importância de reciclar o lixo no nosso dia a dia?",
        alternativas: [
            {
                texto: "Reciclar protege o meio ambiente!",
                afirmacao: "Você reconhece que reciclar ajuda a proteger o meio ambiente."
            },
            {
                texto: "Economiza recursos!",
                afirmacao: "Você entende que a reciclagem contribui para a economia de recursos naturais."
            }
        ]
    },

    {
        enunciado: "O que é o efeito estufa e como ele afeta o clima da Terra?",
        alternativas: [
            {
                texto: "É um fenômeno natural que retém o calor.",
                afirmacao: "Você reconhece que o efeito estufa é um fenômeno natural responsável por reter parte do calor."
            },
            {
                texto: "É a poluição provocada apenas pelas indústrias.",
                afirmacao: "Você relaciona o efeito estufa exclusivamente à poluição das indústrias."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {

    // Verifica se todas as perguntas foram respondidas
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    // Pega a pergunta atual
    const perguntaAtual = perguntas[atual];

    // Exibe o enunciado
    caixaPerguntas.textContent = perguntaAtual.enunciado;

    // Limpa as alternativas anteriores
    caixaAlternativas.innerHTML = "";

    // Cria os botões das alternativas
    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", function () {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {

    // Guarda a afirmação correspondente à resposta
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    // Passa para a próxima pergunta
    atual++;

    // Mostra a próxima pergunta
    mostraPergunta();
}

function mostraResultado() {

    // Muda o título da pergunta
    caixaPerguntas.textContent = "Quiz finalizado!";

    // Exibe o resultado
    textoResultado.textContent = historiaFinal;

    // Remove as alternativas
    caixaAlternativas.innerHTML = "";

    // Esconde a caixa de alternativas
    caixaAlternativas.style.display = "none";

    // Mostra o resultado
    caixaResultado.style.display = "block";
}

function reiniciarQuiz() {

    // Volta para a primeira pergunta
    atual = 0;

    // Apaga o resultado anterior
    historiaFinal = "";

    // Esconde o resultado
    caixaResultado.style.display = "none";

    // Mostra novamente as alternativas
    caixaAlternativas.style.display = "flex";

    // Começa o quiz novamente
    mostraPergunta();
}

// Inicia o quiz
mostraPergunta();