class SnakeGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.gridSize = 20;
        this.snake = [{x: 5, y: 5}];
        this.direction = 'right';
        this.food = this.generateFood();
        this.score = 0;
        this.gameLoop = null;
        this.speed = 150;

        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('startButton').addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // モバイルコントロール
        document.getElementById('upButton').addEventListener('click', () => this.setDirection('up'));
        document.getElementById('downButton').addEventListener('click', () => this.setDirection('down'));
        document.getElementById('leftButton').addEventListener('click', () => this.setDirection('left'));
        document.getElementById('rightButton').addEventListener('click', () => this.setDirection('right'));
    }

    startGame() {
        if (this.gameLoop) return;
        this.snake = [{x: 5, y: 5}];
        this.direction = 'right';
        this.score = 0;
        this.updateScore();
        this.food = this.generateFood();
        this.gameLoop = setInterval(() => this.update(), this.speed);
    }

    handleKeyPress(e) {
        const key = e.key.toLowerCase();
        const directions = {
            'arrowup': 'up',
            'arrowdown': 'down',
            'arrowleft': 'left',
            'arrowright': 'right',
            'w': 'up',
            's': 'down',
            'a': 'left',
            'd': 'right'
        };
        if (directions[key]) {
            e.preventDefault();
            this.setDirection(directions[key]);
        }
    }

    setDirection(newDirection) {
        const opposites = {
            'up': 'down',
            'down': 'up',
            'left': 'right',
            'right': 'left'
        };
        if (this.snake.length > 1 && newDirection === opposites[this.direction]) return;
        this.direction = newDirection;
    }

    generateFood() {
        const food = {
            x: Math.floor(Math.random() * (this.canvas.width / this.gridSize)),
            y: Math.floor(Math.random() * (this.canvas.height / this.gridSize))
        };
        // 蛇の体と重ならないように確認
        if (this.snake.some(segment => segment.x === food.x && segment.y === food.y)) {
            return this.generateFood();
        }
        return food;
    }

    update() {
        const head = {...this.snake[0]};
        switch (this.direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }

        // 壁との衝突チェック
        if (head.x < 0 || head.x >= this.canvas.width / this.gridSize ||
            head.y < 0 || head.y >= this.canvas.height / this.gridSize ||
            this.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
            this.gameOver();
            return;
        }

        this.snake.unshift(head);

        // 餌を食べた場合
        if (head.x === this.food.x && head.y === this.food.y) {
            this.score += 10;
            this.updateScore();
            this.food = this.generateFood();
        } else {
            this.snake.pop();
        }

        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 蛇の描画
        this.snake.forEach((segment, index) => {
            this.ctx.fillStyle = index === 0 ? '#4CAF50' : '#69F0AE';
            this.ctx.fillRect(
                segment.x * this.gridSize,
                segment.y * this.gridSize,
                this.gridSize - 2,
                this.gridSize - 2
            );
        });

        // 餌の描画
        this.ctx.fillStyle = '#FF5252';
        this.ctx.fillRect(
            this.food.x * this.gridSize,
            this.food.y * this.gridSize,
            this.gridSize - 2,
            this.gridSize - 2
        );
    }

    updateScore() {
        document.getElementById('score').textContent = this.score;
    }

    gameOver() {
        clearInterval(this.gameLoop);
        this.gameLoop = null;
        alert(`ゲームオーバー！\nスコア: ${this.score}`);
    }
}

// ゲームのインスタンス化
window.addEventListener('load', () => {
    new SnakeGame();
});