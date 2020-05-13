		// ИГРА Найди Клад
//----------------------------------------------------------------------------------
$('document').ready(function () {
	
		//Случайное число от 0 до size
	function getRandomNub(size) {
		return Math.floor(Math.random() * size);
	}

	let width = 800,
		height = 800;

		// Координаты клада
	let target = {
		x: getRandomNub(width),
		y: getRandomNub(height)
	};

		//Счётчик кликов
	let clicks = 0;		

	

		//Вычислить расстояние от клика (event) до клада (target)
	function getDistance(event, target) {
		let diffX = event.offsetX - target.x, //diffX - горизонтальная сторона треугольника, 
			diffY = event.offsetY - target.y; //diffY - вертикальная
		return Math.sqrt((diffX * diffX) + (diffY * diffY));		// по теореме Пифагора Math.sqrt - квадратный корень
	};

		//Получить строку подсказки для расстояниz
	function getDistanceHint(distance) {
		if(distance < 20){
			return `Обожжешься! Попытки: ${clicks} из 60`;
		}else if (distance < 40) {
			return `Очень горячо! Попытки: ${clicks} из 60`;
		}else if (distance < 80) {
			return `Горячо! Попытки: ${clicks} из 60`;
		}else if (distance < 170) {
			return `Тепло! Попытки: ${clicks} из 60`;
		}else if (distance < 460) {
			return` Холодно Попытки: ${clicks} из 60`;
		}else if (distance < 700) {
			return `Замерзнешь! Попытки: ${clicks} из 60`;
		}
	};

	$('#map').click(function(e) {
		clicks++;

		let distance = getDistance(event, target), //расстояние от места клика до клада
		distanceHint = getDistanceHint(distance); // преобразование расстояния в подсказку

		$('#distance').text(distanceHint); //запись подсказки в парраграф

		if (clicks === 60) {
			alert("Конец игры! Ходы закончились");
			return
		}
		if(distance < 15){
			alert(`Клад найден! Сделано кликов: ${clicks}`) // Поздравление с победой
		}
	});
	
});