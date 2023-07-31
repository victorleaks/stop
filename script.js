// Espera até que o DOM esteja carregado
document.addEventListener("DOMContentLoaded", function () {
    // Obtém todas as categorias
    const categories = document.querySelectorAll("#categories li");

    // Cria uma matriz para armazenar as respostas dos jogadores
    const player1Answers = [];
    const player2Answers = [];
    // Adicione mais matrizes de respostas para mais jogadores

    // Adiciona um ouvinte de eventos aos campos de resposta
    document.querySelectorAll("[contenteditable='true']").forEach((field, index) => {
        field.addEventListener("input", function () {
            const currentPlayer = index % 2 === 0 ? player1Answers : player2Answers;
            currentPlayer[index / 2] = this.innerText;
        });
    });

    // Inicia o jogo, definindo um temporizador
    let seconds = 60;
    const timerDisplay = document.createElement("div");
    timerDisplay.innerText = `Tempo restante: ${seconds} segundos`;
    document.body.appendChild(timerDisplay);

    const countdown = setInterval(() => {
        seconds--;
        timerDisplay.innerText = `Tempo restante: ${seconds} segundos`;

        if (seconds <= 0) {
            clearInterval(countdown);
            // Chame a função para mostrar os resultados aqui
            alert("Tempo esgotado! Jogo terminado.");
        }
    }, 1000);
});
