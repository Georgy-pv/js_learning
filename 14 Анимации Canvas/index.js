$('document').ready(function () {
	
	// let canvas = document.getElementById('canvas'),
	// 	ctx = canvas.getContext('2d');

// движение квадрата--------------
	// let position = 0;

	// setInterval(function () {
	// 	ctx.clearRect(0, 0, 200, 200);
	// 	ctx.fillRect (position, 0, 20, 20);
	// 	position++;
	// 	if(position > 200){
	// 		position = 0;
	// 	}
	// }, 30);


// увеличение квадрата------------
	// let size = 0;
	// setInterval(function () {
	// 	ctx.clearRect(0, 0, 200, 200);
	// 	ctx.fillRect(0, 0, size, size);
	// 	size++;
	// 	if(size > 200){
	// 		size = 0;
	// 	}
	// }, 30);


			// Случайная пчела
//---------------------------------------------------------

		// функция рисования окружностей
	// let circle = function(x, y, radius, fillCircle) {
	// 	ctx.beginPath();
	// 	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	// 	if(fillCircle){
	// 		ctx.fill();
	// 	}else{
	// 		ctx.stroke();
	// 	}
	// };

	// 	//отрисовка пчелы
	// function drawBee(x, y) {
	// 	ctx.lineWidth = 2;
	// 	ctx.strokeStyle = "Black";
	// 	ctx.fillStyle = "Gold";

	// 	circle(x, y, 8, true);
	// 	circle(x, y, 8, false);
	// 	circle(x - 5, y - 11, 5, false);
	// 	circle(x + 5, y - 11, 5, false);
	// 	circle(x - 2, y - 1, 2, false);
	// 	circle(x + 2, y - 1, 2, false);
	// }

	// 	// Рандомное изменение позиции пчелы
	// function update(coordinate) {
	// 	let offset = Math.random() * 4 - 2;
	// 	coordinate += offset;

	// 	if(coordinate > 200){
	// 		coordinate = 200
	// 	}
	// 	if(coordinate < 0){
	// 		coordinate = 0;
	// 	}

	// 	return coordinate;
	// }

	// let canvas = document.getElementById('canvas'),
	// 	ctx = canvas.getContext('2d'),
	// 	x = 100, //начальные координаты
	// 	y = 100;

	// setInterval(function() {
	// 	ctx.clearRect(0, 0, 200, 200); // очистка холста

	// 	drawBee(x, y);  //отрисовка пчелы

	// 	x = update(x); // обновление координат
	// 	y = update(y);

	// 	ctx.strokeRect(0, 0, 200, 200); // обведение рамкой границ холста
	// }, 30)

		//Конец кода Пчелы
//---------------------------------------------------------



		// Отскакивающий мяч
//---------------------------------------------------------
		//Конструктор мяча
	function Ball() {
		this.x = 100;
		this.y = 100;
		this.xSpeed = Math.random() * 10 - 5;
		this.ySpeed = Math.random() * 10 - 5;
		this.color = pickRandomColor(color);
	}

		//случайный цвет
	let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Yellowgreen", "Black", "Gold"];

	function pickRandomColor(colors) {
		return colors[Math.floor(Math.random() * colors.length)];

	}

	let circle = function(x, y, radius, fillCircle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2, false);
		if(fillCircle){
			ctx.fill();
		}else{
			ctx.stroke();
		}
	};

		//Добавление метода отрисовки к конструктору Ball + назначение цвета
	Ball.prototype.draw = function () {
		ctx.fillStyle = this.color;
		circle(this.x, this.y, 5, true);
	}

		//Добавление к конструктору Ball метода перемещения мяча
	Ball.prototype.move = function () {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

		//Добавление к конструктору Ball метода отскока мяча
	Ball.prototype.checkCollision = function () {
		if(this.x < 5 || this.x > 195){
			this.xSpeed = -this.xSpeed;
		}
		if(this.y < 5 || this.y > 195){
			this.ySpeed = -this.ySpeed;
		}
	}


		//Анимация мяча

	let canvas = document.getElementById('canvas'),
		ctx = canvas.getContext('2d');

	let ball = new Ball();

	let arrBalls = ['/dsds', 'dsds'];

	for(var i = 0; i < 10; i++){
		arrBalls[i] = new Ball();
	}
	// console.log(arrBalls);
	setInterval (function() {
		ctx.clearRect(0, 0, 200, 200);

		for(var j = 0; j < 10; j++){
			// console.log(arrBalls[j]);
			arrBalls[j].draw(); //отрисовка
			arrBalls[j].move(); // обновление координат
			arrBalls[j].checkCollision()
		}

		ctx.strokeRect(0, 0, 200, 200);
	}, 30)
		
// console.log(arrBalls[0]);
});