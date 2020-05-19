document.addEventListener('DOMContentLoaded', function(){


		 //определения холста
	let canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height;

		// Деление холста на ячейки, сетка
	let blockSize = 10, // ширина/длина ячейки
		widthInBlocks = width / blockSize,
		heightInBlocks = height / blockSize;

		//Счёт
	let score = 0;


		//рамка игры
	function drawBorder() {
		ctx.fillStyle = "Gray";
		ctx.fillRect(0, 0, width, blockSize);
		ctx.fillRect(0, height - blockSize, width, blockSize);
		ctx.fillRect(0, 0, blockSize, height);
		ctx.fillRect(width - blockSize, 0, blockSize, height);
	};
	drawBorder();
	
		// функция отображения счёта
	function drawScore() {
		ctx.font = "20px Courier";
		ctx.fillStyle = "Black";
		ctx.textAlign = "left";
		ctx.textBaseline = "top";
		ctx.fillText("Счёт: " + score, blockSize, blockSize)
	}

		// Конец игры, отображение
	function gameOver() {
        clearInterval(intervalId)
		ctx.font = "60px Courier";
		ctx.fillStyle = "Black";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
        ctx.fillText("Конец игры", width/2, height/2);
	}


		// Конструктор ячейки 
	function Block(col, row) {
		this.col = col;
		this.row = row;
	};


		// Метод отрисовки блока по строке и столбцу
	Block.prototype.drawSquare = function(color) {
		let x = this.col * blockSize,
			y = this.row * blockSize;

		ctx.fillStyle = color;
		ctx.fillRect(x, y, blockSize, blockSize);
	};


	// Функция рисования окружности внутри ячейки
	let circle = function(x, y, radius, fillCircle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);
		if(fillCircle){
			ctx.fill();
		}else{
			ctx.stroke();
		}
	};


		// Метод отрисовки окружности по строке и столбцу
	Block.prototype.drawCircle = function(color) {
		let centerX = this.col * blockSize + blockSize/2,
			centerY = this.row * blockSize + blockSize/2;

		ctx.fillStyle = color;
		circle(centerX, centerY, blockSize/2, true);
	};

		// Проверка нахождения 2-х объектов-ячейки в одной и той же позиции
		//Голова и яблоко в одной позиции - змейка съела яблоко
		// Голова и тело в одной позиции - змейка врезалась в свой хвост
	Block.prototype.equal = function(otherBlock) {
		return this.col === otherBlock.col && this.row === otherBlock.row;
	};


		// Конструктор для создания змейки
	function Snake() {

		//сегменты - тело змейки
		this.segments = [   
			new Block(7, 5),
			new Block(6, 5),
			new Block(5, 5)
		];

		//текущее направление движения
		this.direction = "right";
		//направление движение в следующей анимации
		this.nextDirection = "right";
	}

		// Метод отрисовки змейки путём перебора массива
	Snake.prototype.draw = function () {
		this.segments[0].drawSquare("green");
		for(var i = 1; i < this.segments.length; i++){
			if(i % 3 == 0){
				this.segments[i].drawSquare("#CD853F");
			}else{
				this.segments[i].drawSquare("#E50000");
			}

		}
	};

		// Перемещение змейки
	Snake.prototype.move = function() {
		let head = this.segments[0];
		let newHead;

			//направление движения
		this.direction = this.nextDirection;

			//создание новой головы в зависимости от направления
		if(this.direction === "right"){
            newHead = new Block(head.col + 1, head.row);
            
		}else if(this.direction === "down"){
			newHead = new Block(head.col, head.row + 1);
		}else if(this.direction === "left"){
			newHead = new Block(head.col - 1, head.row);
		}else if(this.direction === "up"){
			newHead = new Block(head.col, head.row - 1);
		}

			// проверка столкновения
		if(this.checkCollision(newHead)){
            gameOver();
			return ;
		}

			// добавление новой головы в начало массива
		this.segments.unshift(newHead);

			// проверка съедения яблока
		if(newHead.equal(apple.position)){
			score++;
            apple.move();
		}else{
			this.segments.pop();
		}
	};


		//Проверка на столкномения
	Snake.prototype.checkCollision = function(head) {
			//проверка столкновения со стенками
		let leftCollision = (head.col === 0),
			rightCollision = (head.col === widthInBlocks - 1),
			topCollision = (head.row === 0),
			bottomCollision = (head.row === heightInBlocks - 1);

		let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

			//проверка столкномения с собственным телом
		let selfCollision = false;

		for(let j = 0; j < this.segments.length; j++){
			//если позиция головы === позиции любого сегмента
			if(head.equal(this.segments[j])){
				//то определяем столкновение с телом
				selfCollision = true;
			};
		}

		// возврат из метода checkCollision результатов проверок на столкновения (true/false)
		return wallCollision || selfCollision
	};



		// Управление змейкой
	let directions = {
		37: "left",
		38: "up",
		39: "right",
		40: "down"
	}

		//Обработчик событий нажатия клавиш
	$('body').keydown(function(e) {
		let newDirection = directions[e.keyCode];
		if(newDirection !== undefined){
			snake.setDirection(newDirection);
		}
	});

		// Метод направления
	Snake.prototype.setDirection = function(newDirection) {

		//проверка допустимости выбранного направления
		if(this.direction === "up" && newDirection ==="down"){
			return
		}else if(this.direction === "right" && newDirection === "left"){
			return
		}else if(this.direction === "down" && newDirection === "up"){
			return
		}else if(this.direction === "left" && newDirection === "right"){
			return
		}

		//присваивание допустимого направления
		this.nextDirection = newDirection;
	}


		//Создание яблока
	function Apple() {
		this.position = new Block(10, 10);
	}

		//Метод отрисовки яблока 
	Apple.prototype.draw = function() {
		this.position.drawCircle("LimeGreen");
	};

		//Перемещение яблока в случайную позицию
	Apple.prototype.move = function() {
		let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
		let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;

		this.position = new Block(randomCol, randomRow);
	}

		//Создание объекта-змейки и объект-яблока
	let snake = new Snake();
	let apple = new Apple();

		//Запуск анимации
	let intervalId = setInterval(function() {
		ctx.clearRect(0, 0, width, height);
		drawScore();
		snake.move();
		snake.draw();
		apple.draw();
        drawBorder();
    }, 100);
    

    
});