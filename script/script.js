document.addEventListener('DOMContentLoaded', () => {
    const companyCards = document.querySelectorAll('.company-card');
    const scoreDisplay = document.getElementById('score');
    const gameTimerDisplay = document.getElementById('time');
    const quizModal = document.getElementById('quiz-modal');
    const closeButton = document.querySelector('.close-button');
    const usabilityProblemDisplay = document.getElementById('usability-problem');
    const problemDescription = document.getElementById('problem');
    const quizOptions = document.getElementById('quiz-options');
    const quizTimerDisplay = document.getElementById('quiz-timer');

    let score = 0;
    let gameTime = 0; // Tempo total do jogo
    let problemInterval;
    let currentProblem = null;
    let quizCountdown;
    let quizTimeLimit = 15; // Tempo para responder cada quiz (segundos)
    let difficultyLevel = 1; // 1: Fácil, 2: Médio, 3: Difícil

    const problemDisplayImages = [
        'https://via.placeholder.com/400x200/FF0000/FFFFFF?text=Problema+de+Interface+1',
        'https://via.placeholder.com/400x200/00FF00/000000?text=Problema+de+Interface+2',
        'https://via.placeholder.com/400x200/0000FF/FFFFFF?text=Problema+de+Interface+3',
        'https://via.placeholder.com/400x200/FFFF00/000000?text=Problema+de+Interface+4',
        'https://via.placeholder.com/400x200/FF00FF/FFFFFF?text=Problema+de+Interface+5',
        'https://via.placeholder.com/400x200/00FFFF/000000?text=Problema+de+Interface+6',
    ];

    function updateScore(amount) {
        score += amount;
        scoreDisplay.textContent = score;
    }

    function startGameTimer() {
        setInterval(() => {
            gameTime++;
            const minutes = Math.floor(gameTime / 60);
            const seconds = gameTime % 60;
            gameTimerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function getRandomCompany() {
        const activeCompanies = Array.from(companyCards).filter(card => !card.classList.contains('has-alert'));
        if (activeCompanies.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * activeCompanies.length);
        return activeCompanies[randomIndex];
    }

    function createAlertSignal(companyCard) {
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert-sinal');
        alertDiv.textContent = '!';
        companyCard.appendChild(alertDiv);
        companyCard.classList.add('has-alert');
    }

    function removeAlertSignal(companyCard) {
        const alertDiv = companyCard.querySelector('.alert-sinal');
        if (alertDiv) {
            companyCard.removeChild(alertDiv);
            companyCard.classList.remove('has-alert');
        }
    }

    function generateProblem() {
        const targetCompany = getRandomCompany();
        if (targetCompany && !quizModal.style.display || quizModal.style.display === 'none') { // Só gera problema se não houver modal aberto
            createAlertSignal(targetCompany);
        }
    }

    function startProblemGeneration() {
        // O intervalo entre os problemas pode variar com a dificuldade
        let interval = 8000; // 8 segundos para dificuldade fácil
        if (difficultyLevel === 2) interval = 5000; // 5 segundos para médio
        if (difficultyLevel === 3) interval = 3000; // 3 segundos para difícil

        if (problemInterval) {
            clearInterval(problemInterval); // Limpa o intervalo anterior se houver
        }
        problemInterval = setInterval(generateProblem, interval);
    }

    function showQuiz(companyCard) {
        const companyId = companyCard.id;
        const companyProblems = usabilityProblems.filter(p => p.company === companyId);

        if (companyProblems.length === 0) {
            alert('Nenhum problema disponível para esta empresa.');
            return;
        }

        currentProblem = companyProblems[Math.floor(Math.random() * companyProblems.length)];


        // Limpa o conteúdo anterior
        usabilityProblemDisplay.innerHTML = '';
        quizOptions.innerHTML = '';

        // Exibe a imagem do problema (se houver)
        if (currentProblem.problemImage) {
            const img = document.createElement('img');
            img.src = currentProblem.problemImage;
            img.alt = 'Problema de Usabilidade';
            usabilityProblemDisplay.appendChild(img);
        } else {
            // Caso não tenha imagem, pode exibir uma mensagem ou estilizar melhor
            usabilityProblemDisplay.textContent = 'Nenhuma imagem de problema disponível.';
        }

        problemDescription.textContent = currentProblem.description;

        // Cria os botões de opção
        currentProblem.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.dataset.optionId = option.id;
            button.addEventListener('click', () => checkAnswer(option.id, companyCard));
            quizOptions.appendChild(button);
        });

        quizModal.style.display = 'flex'; // Exibe o modal

        // Inicia o cronômetro do quiz
        let timeLeft = quizTimeLimit;
        quizTimerDisplay.textContent = `Tempo restante: ${timeLeft}s`;
        clearInterval(quizCountdown); // Garante que não há cronômetros duplicados

        quizCountdown = setInterval(() => {
            timeLeft--;
            quizTimerDisplay.textContent = `Tempo restante: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(quizCountdown);
                handleQuizTimeout(companyCard);
            }
        }, 1000);
    }

    function checkAnswer(selectedOptionId, companyCard) {
        clearInterval(quizCountdown); // Para o cronômetro do quiz

        const buttons = quizOptions.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.dataset.optionId === currentProblem.correctHeuristicId) {
                button.classList.add('correct');
            } else if (button.dataset.optionId === selectedOptionId) {
                button.classList.add('incorrect');
            }
            button.disabled = true; // Desabilita os botões após a resposta
        });

        if (selectedOptionId === currentProblem.correctHeuristicId) {
            updateScore(100 * difficultyLevel); // Ganha mais pontos em dificuldades maiores
            alert('Parabéns! Resposta correta!');
        } else {
            updateScore(-50 * difficultyLevel); // Perde mais pontos em dificuldades maiores
            alert('Ops! Resposta incorreta.');
        }

        setTimeout(() => {
            quizModal.style.display = 'none'; // Esconde o modal
            removeAlertSignal(companyCard); // Remove o alerta da empresa
        }, 1500); // Dá um tempo para o usuário ver o feedback
    }

    function handleQuizTimeout(companyCard) {
        alert('Tempo esgotado! Você perdeu dinheiro.');
        updateScore(-50 * difficultyLevel);
        quizModal.style.display = 'none';
        removeAlertSignal(companyCard);
    }

    // Event Listeners para os cartões das empresas
    companyCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('has-alert')) {
                showQuiz(card);
            } else {
                alert('Essa empresa não tem problemas de usabilidade agora!');
            }
        });
    });

    // Event Listener para fechar o modal
    closeButton.addEventListener('click', () => {
        clearInterval(quizCountdown);
        quizModal.style.display = 'none';
        // Se o quiz foi fechado sem resposta, penaliza o jogador
        if (currentProblem) {
            updateScore(-20 * difficultyLevel); // Penalidade menor por fechar
            alert('Quiz fechado sem resposta. Você perdeu um pouco de dinheiro.');
        }
    });

    // Função para definir o nível de dificuldade (ainda precisa de interface para o usuário)
    function setDifficulty(level) {
        difficultyLevel = level;
        console.log(`Dificuldade definida para: ${difficultyLevel}`);
        // Reinicia a geração de problemas com o novo intervalo
        startProblemGeneration();
        if (difficultyLevel === 1) quizTimeLimit = 20;
        else if (difficultyLevel === 2) quizTimeLimit = 15;
        else if (difficultyLevel === 3) quizTimeLimit = 10;
    }

    // Iniciar o jogo
    startGameTimer();
    setDifficulty(1); // Começa no nível fácil, ou pode ter um seletor inicial
});