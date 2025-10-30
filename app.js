// CISSP学習アプリのメインクラス
class CISSPApp {
    constructor() {
        this.currentDomain = null;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answered = false;

        this.initializeElements();
        this.setupEventListeners();
    }

    initializeElements() {
        // 画面要素
        this.screens = {
            domainSelection: document.getElementById('domainSelection'),
            questionScreen: document.getElementById('questionScreen'),
            resultScreen: document.getElementById('resultScreen')
        };

        // ドメイン選択画面の要素
        this.domainButtons = document.querySelectorAll('.domain-btn');

        // 問題画面の要素
        this.progressFill = document.getElementById('progressFill');
        this.currentDomainDisplay = document.getElementById('currentDomain');
        this.questionCounter = document.getElementById('questionCounter');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.feedbackContainer = document.getElementById('feedbackContainer');
        this.feedbackMessage = document.getElementById('feedbackMessage');
        this.explanationText = document.getElementById('explanationText');
        this.nextButton = document.getElementById('nextButton');
        this.backToDomainsButton = document.getElementById('backToDomains');

        // 結果画面の要素
        this.scorePercentage = document.getElementById('scorePercentage');
        this.scoreText = document.getElementById('scoreText');
        this.resultDomain = document.getElementById('resultDomain');
        this.correctCount = document.getElementById('correctCount');
        this.totalCount = document.getElementById('totalCount');
        this.accuracyRate = document.getElementById('accuracyRate');
        this.retryButton = document.getElementById('retryButton');
        this.backToDomainsFromResultButton = document.getElementById('backToDomainsFromResult');
    }

    setupEventListeners() {
        // ドメイン選択ボタン
        this.domainButtons.forEach(button => {
            button.addEventListener('click', () => {
                const domain = button.dataset.domain;
                this.startQuiz(domain);
            });
        });

        // 次の問題ボタン
        this.nextButton.addEventListener('click', () => {
            this.nextQuestion();
        });

        // ドメイン選択に戻るボタン
        this.backToDomainsButton.addEventListener('click', () => {
            this.showScreen('domainSelection');
        });

        // もう一度挑戦ボタン
        this.retryButton.addEventListener('click', () => {
            this.startQuiz(this.currentDomain);
        });

        // 結果画面からドメイン選択に戻るボタン
        this.backToDomainsFromResultButton.addEventListener('click', () => {
            this.showScreen('domainSelection');
        });
    }

    showScreen(screenName) {
        // すべての画面を非表示
        Object.values(this.screens).forEach(screen => {
            screen.classList.remove('active');
        });
        // 指定された画面を表示
        this.screens[screenName].classList.add('active');
    }

    startQuiz(domain) {
        this.currentDomain = domain;
        this.questions = this.shuffleArray([...questionBank[domain]]);
        this.currentQuestionIndex = 0;
        this.score = 0;

        this.showScreen('questionScreen');
        this.showQuestion();
    }

    shuffleArray(array) {
        // Fisher-Yatesシャッフルアルゴリズム
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    showQuestion() {
        this.answered = false;
        this.feedbackContainer.classList.add('hidden');
        this.feedbackContainer.classList.remove('correct', 'incorrect');

        const question = this.questions[this.currentQuestionIndex];

        // プログレスバーの更新
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;

        // 問題情報の表示
        this.currentDomainDisplay.textContent = this.currentDomain;
        this.questionCounter.textContent = `問題 ${this.currentQuestionIndex + 1} / ${this.questions.length}`;

        // 問題文の表示
        this.questionText.textContent = question.question;

        // 選択肢の表示
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.textContent = option;
            button.addEventListener('click', () => this.checkAnswer(index));
            this.optionsContainer.appendChild(button);
        });
    }

    checkAnswer(selectedIndex) {
        if (this.answered) return;

        this.answered = true;
        const question = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === question.correctAnswer;

        // 選択した回答をハイライト
        const optionButtons = this.optionsContainer.querySelectorAll('.option-btn');
        optionButtons.forEach((button, index) => {
            button.classList.add('disabled');
            if (index === question.correctAnswer) {
                button.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                button.classList.add('incorrect');
            }
        });

        // スコアの更新
        if (isCorrect) {
            this.score++;
        }

        // フィードバックの表示
        this.showFeedback(isCorrect, question.explanation);
    }

    showFeedback(isCorrect, explanation) {
        this.feedbackContainer.classList.remove('hidden');
        this.feedbackContainer.classList.add(isCorrect ? 'correct' : 'incorrect');

        this.feedbackMessage.textContent = isCorrect ? '正解です！' : '不正解です';
        this.explanationText.textContent = explanation;
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);

        // スコアサークルの表示
        this.scorePercentage.textContent = `${percentage}%`;

        // スコアテキストの表示
        let scoreMessage = '';
        if (percentage >= 90) {
            scoreMessage = '素晴らしい！';
        } else if (percentage >= 70) {
            scoreMessage = 'よくできました！';
        } else if (percentage >= 50) {
            scoreMessage = 'もう少しです！';
        } else {
            scoreMessage = '復習が必要です';
        }
        this.scoreText.textContent = scoreMessage;

        // 詳細情報の表示
        this.resultDomain.textContent = this.currentDomain;
        this.correctCount.textContent = this.score;
        this.totalCount.textContent = this.questions.length;
        this.accuracyRate.textContent = percentage;

        // 結果画面を表示
        this.showScreen('resultScreen');
    }
}

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    new CISSPApp();
});
