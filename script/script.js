document.addEventListener("DOMContentLoaded", () => {
  const companyCards = document.querySelectorAll(".company-card");
  const scoreDisplay = document.getElementById("score");
  const gameTimeDisplay = document.getElementById("game-time");
  const quizModal = document.getElementById("quiz-modal");
  const closeButton = document.querySelector(".close-button");
  const usabilityProblemImage = document.getElementById(
    "usability-problem-image"
  );
  const problemDescription = document.getElementById("problem-description");
  const quizOptions = document.getElementById("quiz-options");
  const quizTimerDisplay = document.querySelector("#quiz-timer span");
  const endGameModal = document.getElementById("end-game-modal");
  const finalScoreDisplay = document.getElementById("final-score");
  const feedbackMessage = document.getElementById("feedback-message");
  const playAgainButton = document.getElementById("play-again-button");
  const startGameModal = document.getElementById("start-game-modal");
  const startButton = document.getElementById("start-button");
  const endGameButton = document.getElementById("end-game-button");
  const confirmModal = document.getElementById("confirmModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");
  const exitButton = document.getElementById("exit");

  let score = 0;
  let gameTime = 0;
  let gameInterval;
  let quizInterval;
  let currentProblem = null;
  let currentCompanyCard = null;
  let problemGenerationInterval = 2000; // 10 segundos para um novo problema surgir
  let problemGenerationTimer;
  let answeredQuestionsCount = 0;
  let quizActive = false;

  //Configurações fase: Inicial,Intermediária e Dificil
  const pointsPerPhase = [5, 10, 15];
  const timeLimitsPerPhase = [30, 20, 15]; // Tempo para responder (Inicial, Intermediário, Final)
  const penaltyPerIncorrectAnswer = 4; // Perde 4 moedas se não responder a tempo

  function updateScore(amount) {
    score = Math.max(0, score + amount);
    scoreDisplay.textContent = score;
  }

  function startGameTimer() {
    stopGameTimer();
    gameInterval = setInterval(() => {
      gameTime++;
      const minutes = Math.floor(gameTime / 60);
      const seconds = gameTime % 60;
      gameTimeDisplay.textContent = `${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
  }

  function stopGameTimer() {
    clearInterval(gameInterval);
    gameInterval = null; // Garante que o intervalo é zerado
  }

  function getRandomCompany() {
    const activeCompanies = Array.from(companyCards).filter(
      (card) =>
        !card.classList.contains("has-alert") &&
        !card.classList.contains("empty-card")
    );

    if (activeCompanies.length === 0) {
      console.log("Todas as empresas estão com alertas ou não são jogáveis.");
      return null;
    }

    const randomIndex = Math.floor(Math.random() * activeCompanies.length);
    return activeCompanies[randomIndex];
  }

  function createAlertSignal(companyCard) {
    if (companyCard.querySelector(".alert-sinal")) return;

    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert-sinal");

    // Verifica se há quiz pendente no localStorage para essa empresa
    const pending = getPendingQuiz(companyCard.id);
    if (pending) {
      alertDiv.classList.add("pendente");
      alertDiv.textContent = "⏳"; // ou '!' se preferir manter
    } else {
      alertDiv.textContent = "!";
    }

    companyCard.appendChild(alertDiv);
    companyCard.classList.add("has-alert");
    companyCard.classList.add("pulsating");
  }

  function removeAlertSignal(companyCard) {
    const alertDiv = companyCard.querySelector(".alert-sinal");
    if (alertDiv) {
      companyCard.removeChild(alertDiv);
      companyCard.classList.remove("has-alert");
      companyCard.classList.remove("pulsating");
    }
  }

  function showMessageModal(title, message, callback = null) {
    const messageModal = document.getElementById("message-modal");
    const messageTitle = document.getElementById("message-title");
    const messageBody = document.getElementById("message-body");
    const messageOkButton = document.getElementById("message-ok-button");

    messageTitle.textContent = title;
    messageBody.textContent = message;
    messageModal.style.display = "flex";

    const closeHandler = () => {
      messageModal.style.display = "none";
      messageOkButton.removeEventListener("click", closeHandler);
      if (callback) callback();
    };

    messageOkButton.addEventListener("click", closeHandler);
  }

  function determinePhase() {
    // Determina a fase do jogo: Inicial,Intermediária ou Final
    if (answeredQuestionsCount < 6) return 0;
    if (answeredQuestionsCount < 12) return 1;
    return 2;
  }

  function getQuizConfig() {
    const phase = determinePhase();
    return {
      points: pointsPerPhase[phase],
      timeLimit: timeLimitsPerPhase[phase],
    };
  }

  function generateProblem() {
    if (quizActive) {
      console.log("Quiz já está ativo, aguardando resposta...");
      return;
    }

    const activeCompanies = Array.from(companyCards).filter((card) => {
      const companyProblems = usabilityProblems.filter(
        (p) => p.company === card.id && !p.alreadyShown
      );
      return (
        !card.classList.contains("has-alert") &&
        !card.classList.contains("empty-card") &&
        companyProblems.length > 0
      );
    });

    if (activeCompanies.length === 0) {
      console.log("Nenhuma empresa disponível para gerar um novo problema.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * activeCompanies.length);
    const targetCompany = activeCompanies[randomIndex];

    createAlertSignal(targetCompany);
  }

  function startProblemGenerationTimer() {
    stopProblemGenerationTimer();
    problemGenerationTimer = setInterval(
      generateProblem,
      problemGenerationInterval
    );
  }

  function stopProblemGenerationTimer() {
    clearInterval(problemGenerationTimer);
    problemGenerationTimer = null;
  }

  function showQuiz(companyCard) {
    stopProblemGenerationTimer();
    quizActive = true;
    currentCompanyCard = companyCard;
    const companyId = companyCard.id;

    let pending = getPendingQuiz(companyId);
    let timeLeft;

    if (pending) {
      currentProblem = usabilityProblems.find(
        (p) => p.id === pending.problemId
      );
      timeLeft = pending.timeLeft;
    } else {
      const companyProblems = usabilityProblems.filter(
        (p) => p.company === companyId && !p.alreadyShown
      );

      if (companyProblems.length === 0) {
        showMessageModal(
          "Atenção",
          "Todos os problemas dessa empresa já foram apresentados."
        );
        removeAlertSignal(companyCard);
        quizActive = false;
        startProblemGenerationTimer();
        return;
      }

      const randomIndex = Math.floor(Math.random() * companyProblems.length);
      currentProblem = companyProblems[randomIndex];
      currentProblem.alreadyShown = true;
      timeLeft = getQuizConfig().timeLimit;
    }

    usabilityProblemImage.src =
      currentProblem.problemImage || "assets/problems/fundoPadrao.png";
    problemDescription.textContent = currentProblem.description;

    const { timeLimit } = getQuizConfig();

    quizOptions.innerHTML = "";
    currentProblem.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.dataset.optionId = option.id;
      button.addEventListener("click", () =>
        checkAnswer(option.id, companyCard, timeLimit)
      );
      quizOptions.appendChild(button);
    });

    quizModal.style.display = "flex";

    quizTimerDisplay.textContent = timeLeft;
    clearInterval(quizInterval);

    quizInterval = setInterval(() => {
      timeLeft--;
      quizTimerDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(quizInterval);
        removePendingQuiz(companyId);
        handleQuizTimeout(companyCard);
      }
    }, 1000);
  }

  function calculateSpeedBonus(initialTimeLimit, timeTaken) {
    // Bônus para o jogador
    // timeTaken é o tempo que o jogador levou para responder
    // timeRemaining é o tempo que restava no cronômetro
    const timeRemaining = initialTimeLimit - timeTaken;

    if (timeRemaining >= initialTimeLimit - 5) return 3;
    if (timeRemaining >= initialTimeLimit - 10) return 2;
    return 0;
  }

  function checkAnswer(selectedOptionId, companyCard, initialTimeLimit) {
    clearInterval(quizInterval);
    removePendingQuiz(companyCard.id);

    const buttons = quizOptions.querySelectorAll("button");
    buttons.forEach((button) => {
      if (button.dataset.optionId === currentProblem.correctHeuristicId) {
        button.classList.add("correct");
      } else if (button.dataset.optionId === selectedOptionId) {
        button.classList.add("incorrect");
      }
      button.disabled = true;
    });

    const { points } = getQuizConfig();
    const timeTaken = initialTimeLimit - parseInt(quizTimerDisplay.textContent);

    if (selectedOptionId === currentProblem.correctHeuristicId) {
      let pointsGained = points;
      const speedBonus = calculateSpeedBonus(initialTimeLimit, timeTaken);
      pointsGained += speedBonus;
      updateScore(pointsGained);
      showMessageModal(
        "Resposta Correta",
        `Parabéns! Você ganhou ${pointsGained} moedas.`
      );
    } else {
      updateScore(-penaltyPerIncorrectAnswer);
      showMessageModal(
        "Resposta Incorreta",
        `Você perdeu ${penaltyPerIncorrectAnswer} moedas.`
      );
    }

    answeredQuestionsCount++;

    setTimeout(() => {
      quizModal.style.display = "none";
      removeAlertSignal(companyCard);
      quizActive = false;

      if (answeredQuestionsCount >= 18) {
        endGame();
      } else {
        startProblemGenerationTimer();
      }
    }, 1500);
  }

  function handleQuizTimeout(companyCard) {
    clearInterval(quizInterval);
    //showMessageModal('Tempo Esgotado', 'Você perdeu dinheiro.');
    updateScore(-penaltyPerIncorrectAnswer); // Penalidade por não responder a tempo
    quizModal.style.display = "none";
    removeAlertSignal(companyCard);
    quizActive = false;
    answeredQuestionsCount++;

    if (answeredQuestionsCount >= 18) {
      endGame();
    } else {
      startProblemGenerationTimer();
    }
  }

  // Adiciona suporte para quizzes pendentes no localStorage
  function getPendingQuiz(companyId) {
    const pending = JSON.parse(localStorage.getItem("pendingQuizzes")) || [];
    return pending.find((p) => p.companyId === companyId);
  }

  function savePendingQuiz(companyId, problemId, timeLeft) {
    const pending = JSON.parse(localStorage.getItem("pendingQuizzes")) || [];
    const updated = pending.filter((p) => p.companyId !== companyId);
    updated.push({ companyId, problemId, timeLeft });
    localStorage.setItem("pendingQuizzes", JSON.stringify(updated));
  }

  function removePendingQuiz(companyId) {
    const pending = JSON.parse(localStorage.getItem("pendingQuizzes")) || [];
    const updated = pending.filter((p) => p.companyId !== companyId);
    localStorage.setItem("pendingQuizzes", JSON.stringify(updated));
  }

  function endGame() {
    // Mostra quantos pontos o jogador tem e uma frase motivacional.
    stopGameTimer();
    stopProblemGenerationTimer();
    clearInterval(quizInterval); // Garante que o quizInterval seja limpo
    quizModal.style.display = "none"; // Garante que o modal do quiz esteja fechado

    finalScoreDisplay.textContent = score;

    let message = "";
    if (score >= 108 && score <= 234) {
      message = "Parabéns! Você é um expert em estratégia de negócios!";
    } else if (score >= 78) {
      message =
        "Excelente trabalho! Você está no caminho certo para o sucesso nos negócios!";
    } else if (score >= 48) {
      message =
        "Você está quase lá! Continue praticando para dominar os desafios empresariais!";
    } else {
      message =
        "Interessante! O mundo dos negócios está cheio de aprendizados, continue explorando!";
    }
    feedbackMessage.textContent = message;

    endGameModal.style.display = "flex";
  }

  function resetGame() {
    score = 0;
    gameTime = 0;
    answeredQuestionsCount = 0;
    quizActive = false;
    scoreDisplay.textContent = score;
    gameTimeDisplay.textContent = "00:00";

    usabilityProblems.forEach((problem) => {
      problem.shownRecently = false;
      problem.alreadyShown = false;
    });

    localStorage.removeItem("pendingQuizzes");

    companyCards.forEach((card) => removeAlertSignal(card));

    quizModal.style.display = "none";
    endGameModal.style.display = "none";

    stopGameTimer();
    stopProblemGenerationTimer();
    clearInterval(quizInterval);
  }

  companyCards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.classList.contains("has-alert")) {
        showQuiz(card);
      }
    });
  });

  closeButton.addEventListener("click", () => {
    clearInterval(quizInterval);
    quizModal.style.display = "none";
    quizActive = false;

    if (currentCompanyCard && currentProblem) {
      const timeLeft = parseInt(quizTimerDisplay.textContent);
      savePendingQuiz(currentCompanyCard.id, currentProblem.id, timeLeft);

      removeAlertSignal(currentCompanyCard);
      createAlertSignal(currentCompanyCard);
    }

    if (answeredQuestionsCount < 18) {
      startProblemGenerationTimer();
    }
  });

  // "Jogar Novamente"
  playAgainButton.addEventListener("click", () => {
    resetGame();
    startGameTimer();
    startProblemGenerationTimer();
  });

  //  "Iniciar Jogo"
  startButton.addEventListener("click", () => {
    startGameTimer();
    startProblemGenerationTimer(); // Inicia a geração de problemas
  });

  endGameButton.addEventListener("click", () => {
    confirmModal.style.display = "flex"; // Mostrar modal
  });

  confirmYes.addEventListener("click", () => {
    confirmModal.style.display = "none"; // Esconde modal
    endGame(); // Finaliza o jogo
  });

  confirmNo.addEventListener("click", () => {
    confirmModal.style.display = "none"; // Esconde modal
  });

  exitButton.addEventListener("click", () => {
    window.location.href = "./index.html";
  });

  usabilityProblems = usabilityProblems.map((problem) => ({
    ...problem,
    alreadyShown: false, // inicializa como falso
  }));
});
