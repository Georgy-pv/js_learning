$('document').ready(function () {
	

				//  создание объектов
	//-----------------------------------------
	
	// let Car = function (x, y) {
	// 	this.x = x;
	// 	this.y = y;
	// };

	// let drawCar = function(car) {
	// 	let carHtml = '<img src="car.png">';

	// 	let carElement = $(carHtml);

	// 	carElement.css({
	// 		position: "absolute",
	// 		left: car.x,
	// 		top: car.y,
	// 	});

	// 	$('body').append(carElement);
	// };


	// let tesla = new Car(20, 20),
	// 	nissan = new Car (100, 200);
	// drawCar(tesla);
	// drawCar(nissan);

 	//--------------------------------------------


 			//Добавление метода к свойству prototype
 	//-----------------------------------------------
 	
 	let Car = function (x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
	};



	Car.prototype.draw = function() {
		let carHtml = '<img src="car2.png">';

		this.carElement = $(carHtml);

		this.carElement.css({
			position: "absolute",
			left: this.x,
			top: this.y
		});

		$('body').append(this.carElement);
	};

	Car.prototype.moveLeft = function(limit) {
		let speed = Math.floor(Math.random() * limit)
		this.x -= speed;

		this.carElement.css({
			left: this.x,
			top: this.y
		});
	};
	Car.prototype.moveUp = function(limit) {
		let speed = Math.floor(Math.random() * limit)
		this.y -= speed;

		this.carElement.css({
			left: this.x,
			top: this.y
		});
	};
	Car.prototype.moveDown = function(limit) {
		let speed = Math.floor(Math.random() * limit)
		this.y += speed;

		this.carElement.css({
			left: this.x,
			top: this.y
		});
	};
	Car.prototype.moveRight = function(limit) {
		let speed = Math.floor(Math.random() * limit)
		this.x += speed;

		this.carElement.css({
			left: this.x,
			top: this.y
		});
	};

	let mitsubishi = new Car(20, 20, 5);
	let toyota = new Car(50, 170, 2);

	mitsubishi.draw();
	toyota.draw();

	console.log(mitsubishi);

	function moveCars() {
		mitsubishi.moveRight(10);
		toyota.moveRight(7);
	}

	setInterval(moveCars, 30);


});
