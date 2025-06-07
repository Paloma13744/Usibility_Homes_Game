document.addEventListener('DOMContentLoaded', () => {
    const companyCards = document.querySelectorAll('.company-card');
    const scoreDisplay = document.getElementById('score');
    const gameTimeDisplay = document.getElementById('game-time');
    const quizModal = document.getElementById('quiz-modal');
    const closeButton = document.querySelector('.close-button');
    const usabilityProblemImage = document.getElementById('usability-problem-image');
    const problemDescription = document.getElementById('problem-description');
    const quizOptions = document.getElementById('quiz-options');
    const quizTimerDisplay = document.querySelector('#quiz-timer span');
    const endGameModal = document.getElementById('end-game-modal');
    const finalScoreDisplay = document.getElementById('final-score');
    const feedbackMessage = document.getElementById('feedback-message');
    const playAgainButton = document.getElementById('play-again-button');
    const startGameModal = document.getElementById('start-game-modal');
    const startButton = document.getElementById('start-button');
    const endGameButton = document.getElementById('end-game-button');
    const exitButton = document.getElementById('exit');

    let score = 0;
    let gameTime = 0;
    let gameInterval;
    let quizInterval;
    let currentProblem = null;
    let currentCompanyCard = null;
    let problemGenerationInterval = 10000; // 10 segundos para um novo problema surgir
    let problemGenerationTimer;
    let answeredQuestionsCount = 0;
    let quizActive = false;

    //Configurações fase: Inicial,Intermediária e Dificil
    const pointsPerPhase = [5, 10, 15];
    const timeLimitsPerPhase = [30, 20, 15]; // Tempo para responder (Inicial, Intermediário, Final)
    const penaltyPerIncorrectAnswer = 4; // Perde 4 moedas se não responder a tempo

    function updateScore(amount) {
        score += amount;
        scoreDisplay.textContent = score;
    }

    function startGameTimer() {
        stopGameTimer();
        gameInterval = setInterval(() => {
            gameTime++;
            const minutes = Math.floor(gameTime / 60);
            const seconds = gameTime % 60;
            gameTimeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function stopGameTimer() {
        clearInterval(gameInterval);
        gameInterval = null; // Garante que o intervalo é zerado
    }

    function getRandomCompany() {
        const activeCompanies = Array.from(companyCards).filter(card => !card.classList.contains('has-alert') && !card.classList.contains('empty-card'));

        if (activeCompanies.length === 0) {
            console.log("Todas as empresas estão com alertas ou não são jogáveis.");
            return null;
        }

        const randomIndex = Math.floor(Math.random() * activeCompanies.length);
        return activeCompanies[randomIndex];
    }

    function createAlertSignal(companyCard) {  // Cria o alerta de problema na empresa
        if (companyCard.querySelector('.alert-sinal')) {
            return;
        }
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('alert-sinal');
        alertDiv.textContent = '!';
        companyCard.appendChild(alertDiv);
        companyCard.classList.add('has-alert');
        companyCard.classList.add('pulsating');
    }

    function removeAlertSignal(companyCard) {
        const alertDiv = companyCard.querySelector('.alert-sinal');
        if (alertDiv) {
            companyCard.removeChild(alertDiv);
            companyCard.classList.remove('has-alert');
            companyCard.classList.remove('pulsating');
        }
    }

    function determinePhase() {   // Determina a fase do jogo: Inicial,Intermediária ou Final
        if (answeredQuestionsCount < 6) return 0;
        if (answeredQuestionsCount < 12) return 1;
        return 2;
    }

    function getQuizConfig() {
        const phase = determinePhase();
        return {
            points: pointsPerPhase[phase],
            timeLimit: timeLimitsPerPhase[phase]
        };
    }

    function generateProblem() {
        if (quizActive) {  // Só gera problema quando não há nenhum quiz ativo no momento
            console.log("Quiz já está ativo, aguardando resposta...");
            return;
        }

        const targetCompany = getRandomCompany();
        if (targetCompany) {
            createAlertSignal(targetCompany);
        } else {
            console.log("Nenhuma empresa disponível para gerar um novo problema ou todas já têm alerta.");
        }
    }

    function startProblemGenerationTimer() {
        stopProblemGenerationTimer();
        problemGenerationTimer = setInterval(generateProblem, problemGenerationInterval);
    }

    function stopProblemGenerationTimer() {
        clearInterval(problemGenerationTimer);
        problemGenerationTimer = null;
    }

    function showQuiz(companyCard) {
        stopProblemGenerationTimer(); // Pausa a geração de novos problemas enquanto o quiz está ativo
        quizActive = true;
        currentCompanyCard = companyCard;
        const companyId = companyCard.id;
        const companyProblems = usabilityProblems.filter(p => p.company === companyId);

        if (companyProblems.length === 0) {
            alert('Nenhum problema disponível para esta empresa.');
            startProblemGenerationTimer();
            quizActive = false;
            return;
        }

        let problemIndex;
        // Garante que o mesmo problema não seja mostrado seguidamente se a empresa tiver mais de um problema
        const availableProblemsForCompany = companyProblems.filter(p => !p.shownRecently);
        if (availableProblemsForCompany.length > 0) {
            problemIndex = Math.floor(Math.random() * availableProblemsForCompany.length);
            currentProblem = availableProblemsForCompany[problemIndex];
        } else {
            // Se todos os problemas da empresa foram mostrados recentemente, escolhe um aleatoriamente
            problemIndex = Math.floor(Math.random() * companyProblems.length);
            currentProblem = companyProblems[problemIndex];
        }

        currentProblem.shownRecently = true;
        setTimeout(() => {
            currentProblem.shownRecently = false;
        }, problemGenerationInterval * 2);

        usabilityProblemImage.src = '';
        quizOptions.innerHTML = '';

        if (currentProblem.problemImage) {
            usabilityProblemImage.src = currentProblem.problemImage;
        } else {
            usabilityProblemImage.src = 'https://via.placeholder.com/400x200/CCCCCC/888888?text=Sem+Imagem';
        }

        problemDescription.textContent = currentProblem.description;

        const { timeLimit } = getQuizConfig();

        currentProblem.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.dataset.optionId = option.id;
            button.addEventListener('click', () => checkAnswer(option.id, companyCard, timeLimit));
            quizOptions.appendChild(button);
        });

        quizModal.style.display = 'flex';

        let timeLeft = timeLimit;
        quizTimerDisplay.textContent = timeLeft;
        clearInterval(quizInterval);

        quizInterval = setInterval(() => {
            timeLeft--;
            quizTimerDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(quizInterval);
                handleQuizTimeout(companyCard);
            }
        }, 1000);
    }

    function calculateSpeedBonus(initialTimeLimit, timeTaken) {  // Bônus para o jogador
        // timeTaken é o tempo que o jogador levou para responder
        // timeRemaining é o tempo que restava no cronômetro
        const timeRemaining = initialTimeLimit - timeTaken;

        if (timeRemaining >= initialTimeLimit - 5) return 3;
        if (timeRemaining >= initialTimeLimit - 10) return 2;
        return 0;
    }

    function checkAnswer(selectedOptionId, companyCard, initialTimeLimit) {
        clearInterval(quizInterval);

        const buttons = quizOptions.querySelectorAll('button');
        buttons.forEach(button => {
            if (button.dataset.optionId === currentProblem.correctHeuristicId) {
                button.classList.add('correct');
            } else if (button.dataset.optionId === selectedOptionId) {
                button.classList.add('incorrect');
            }
            button.disabled = true;
        });

        const { points } = getQuizConfig();
        // O tempo que levou para responder é a diferença entre o tempo inicial e o tempo que restava
        const timeTaken = initialTimeLimit - parseInt(quizTimerDisplay.textContent);

        if (selectedOptionId === currentProblem.correctHeuristicId) {
            let pointsGained = points;
            const speedBonus = calculateSpeedBonus(initialTimeLimit, timeTaken);
            pointsGained += speedBonus;
            updateScore(pointsGained);
            alert(`Parabéns! Resposta correta! Você ganhou ${pointsGained} moedas.`);
        } else {
            updateScore(-penaltyPerIncorrectAnswer);
            alert(`Ops! Resposta incorreta. Você perdeu ${penaltyPerIncorrectAnswer} moedas.`);
        }

        answeredQuestionsCount++;

        setTimeout(() => {
            quizModal.style.display = 'none';
            removeAlertSignal(companyCard);
            quizActive = false;

            if (answeredQuestionsCount >= 18) {
                endGame();
            } else {
                startProblemGenerationTimer(); // Reinicia o timer para gerar próximo problema
            }
        }, 1500);
    }

    function handleQuizTimeout(companyCard) {
        clearInterval(quizInterval);
        alert('Tempo esgotado! Você perdeu dinheiro.');
        updateScore(-penaltyPerIncorrectAnswer); // Penalidade por não responder a tempo
        quizModal.style.display = 'none';
        removeAlertSignal(companyCard);
        quizActive = false;
        answeredQuestionsCount++;

        if (answeredQuestionsCount >= 18) {
            endGame();
        } else {
            startProblemGenerationTimer();
        }
    }

    function endGame() {  // Mostra quantos pontos o jogador tem e uma frase motivacional.
        stopGameTimer();
        stopProblemGenerationTimer();
        clearInterval(quizInterval); // Garante que o quizInterval seja limpo
        quizModal.style.display = 'none'; // Garante que o modal do quiz esteja fechado

        finalScoreDisplay.textContent = score;

        let message = "";
        if (score >= 108 && score <= 234) {
            message = "Parabéns! Você é um expert em estratégia de negócios!";
        } else if (score >= 78) {
            message = "Excelente trabalho! Você está no caminho certo para o sucesso nos negócios!";
        } else if (score >= 48) {
            message = "Você está quase lá! Continue praticando para dominar os desafios empresariais!";
        } else {
            message = "Interessante! O mundo dos negócios está cheio de aprendizados, continue explorando!";
        }
        feedbackMessage.textContent = message;

        endGameModal.style.display = 'flex';
    }

    function resetGame() {
        score = 0;
        gameTime = 0;
        answeredQuestionsCount = 0;
        quizActive = false;
        scoreDisplay.textContent = score;
        gameTimeDisplay.textContent = "00:00";

        // Reinicia a propriedade shownRecently para todos os problemas
        usabilityProblems.forEach(problem => problem.shownRecently = false);

        companyCards.forEach(card => removeAlertSignal(card));

        quizModal.style.display = 'none';
        endGameModal.style.display = 'none';

        stopGameTimer();
        stopProblemGenerationTimer();
        clearInterval(quizInterval);


    }

    companyCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('has-alert')) {
                showQuiz(card);
            } else if (!card.classList.contains('empty-card')) { // Evita alerta para cards vazios
                alert('Essa empresa não tem problemas de usabilidade agora!');
            }
        });
    });


    closeButton.addEventListener('click', () => {
        clearInterval(quizInterval); // Apenas para o cronômetro do quiz
        quizModal.style.display = 'none';
        quizActive = false;
        // Se um quiz estava ativo e foi fechado, remove o alerta da empresa
        if (currentCompanyCard && currentCompanyCard.classList.contains('has-alert')) {
            removeAlertSignal(currentCompanyCard);
        }
        // Retoma a geração de problemas se o jogo não terminou
        if (answeredQuestionsCount < 18) {
            startProblemGenerationTimer();
        }
    });

    // "Jogar Novamente"
    playAgainButton.addEventListener('click', () => {
        resetGame();
        startGameTimer();
        startProblemGenerationTimer();
    });

    //  "Iniciar Jogo"
    startButton.addEventListener('click', () => {
        startGameTimer();
        startProblemGenerationTimer(); // Inicia a geração de problemas
    });

    // Finaliza o jogo (ao clicar no botão)
    endGameButton.addEventListener('click', () => {
        if (confirm("Tem certeza que deseja finalizar o jogo? Sua pontuação atual será registrada.")) {
            endGame();
        }
    });



    exitButton.addEventListener('click', () => {
        if (confirm("Deseja realmente sair do jogo? Seu progresso será perdido.")) {
            window.location.href = './index.html';
        }
    });



});