document.addEventListener('DOMContentLoaded', function(){

	

		//настройка холста
	let canvas = document.getElementById('canvas'),
		ctx = canvas.getContext("2d"),
		width = canvas.width,
		height = canvas.height;

	
		
		//функция отрисовки мяча
	function circle(x, y, radius, fillCirle) {
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, Math.PI * 2);

		if(fillCirle){
			ctx.fill();
		}else{
			ctx.stroke();
		}
	}

		//Конструктор мяча Ball
	let Ball = function () {
		this.x = width / 2;
		this.y = height / 2;
		this.xSpeed = 5;
		this.ySpeed = 0;
		this.speed = 5;
	}
	
	
		// Обновление позиции мяча соответственно его скорости
	Ball.prototype.move = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;

		if(this.x < 0 || this.x > width){
			this.xSpeed = -this.xSpeed
		}
		if(this.y < 0 || this.y > height){
			this.ySpeed = -this.ySpeed
		}
	};


	let rad = 10; // радиус окружности

		//Метод отрисовки
	Ball.prototype.draw = function(rad) {
		circle(this.x, this.y, rad, true);
	};
	

		// Метод смены направления движения по событию keydown
	Ball.prototype.setDirection = function(direction) {
		if(direction == "up"){
			this.xSpeed = 0;
			this.ySpeed = -this.speed;
		}else if(direction == "down"){
			this.xSpeed = 0;
			this.ySpeed = this.speed;
		}else if(direction == "left"){
			this.xSpeed = -this.speed;
			this.ySpeed = 0;
		}else if(direction == "right"){
			this.xSpeed = this.speed;
			this.ySpeed = 0;
		}else if(direction == "stop"){
			this.xSpeed = 0;
			this.ySpeed = 0;
		}
	}

		// Выбор скорости
	Ball.prototype.setSpeed = function(speed) {
		if (speed == 1) {
			this.speed = 1;
		} else if(speed == 2){
			this.speed = 2;
		}else if(speed == 3){
			this.speed = 3;
		}else if(speed == 4){
			this.speed = 4;
		}else if(speed == 5){
			this.speed = 5;
		}else if(speed == 6){
			this.speed = 6;
		}else if(speed == 7){
			this.speed = 7;
		}else if(speed == 8){
			this.speed = 8;
		}else if(speed == 9){
			this.speed = 9;
		}
	};


	Ball.prototype.settings = function(settings) {
		if (settings == "small") {
			rad -= 2;
		}else if(settings == "big"){
			rad +=2;
		}
		if(settings == "slow"){
			this.speed--
		}else if(settings == "fast"){
			this.speed++
		}
	};
	
		//Создание объект-мяча
	let ball = new Ball();

		// отслеживание события keydown
	let keyActions = {
		"32": "stop",
		"37": "left",
		"38": "up",
		"39": "right",
		"40": "down"
	};

		// Скорость мяча
	let speeds = {
		"49": 1,
		"50": 2,
		"51": 3,
		"52": 4,
		"53": 5,
		"54": 6,
		"55": 7,
		"56": 8,
		"57": 9,
	};

	let settings = {
		"90": "slow",
		"88": "fast",
		"67": "small",
		"86": "big"
	};

	$('body').keydown(function(e) {
		let direction = keyActions[e.keyCode];
		let speed = speeds[e.keyCode];
		let setting = settings[e.keyCode];
		ball.setSpeed(speed);
		ball.setDirection(direction);	
		ball.settings(setting);
		console.log(ball.speed);
	});

	
		// Анимирование мяча
	setInterval(function() {
		ctx.clearRect(0, 0, width, height);
		ball.draw(rad);
		ball.move();
		ctx.strokeRect(0, 0, width, height);
	}, 30);
	

});