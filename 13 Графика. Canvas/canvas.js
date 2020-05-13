document.addEventListener('DOMContentLoaded', function(){

	let canvas = document.getElementById('canvas');

	let ctx = canvas.getContext("2d");
	


		//Рисунок робота
//---------------------------------------------------
	   	
	// 	//Голова и шея
	// ctx.fillStyle = "Red"; //Назначение цвета
	// ctx.fillRect(50,0,50,50);    
	// ctx.fillRect(70,50,10,20); 

	// 	//Руки
	// ctx.fillStyle = "Blue";
	// ctx.fillRect(0,70,40,10);    
	// ctx.fillRect(110,70,40,10);    
		
	// 	//Туловище
	// ctx.fillStyle = "Green";
	// ctx.fillRect(40,70,70,70);

	// 	//Ноги
	// ctx.fillStyle = "Black";
	// ctx.fillRect(40,140,10,50);    
	// ctx.fillRect(100,140,10,50);    
//--------------------------------------------------
		
		//Полый прямоугольник
//--------------------------------------------------
	
	// ctx.strokeStyle = "DeepPink"; // цвет фигуры
	// ctx.lineWidth = 4;            // толщина линии
	// ctx.strokeRect (10, 10, 100, 20);

//--------------------------------------------------
	



		//Рисование путей
//--------------------------------------------------
	
	// ctx.strokeStyle = "Turquoise";
	// ctx.lineWidth = 4;

	// Отрисовывание берюзового крестика
	// ctx.beginPath();
	// ctx.moveTo(10, 10);
	// ctx.lineTo(60, 60);
	// ctx.moveTo(60, 10);
	// ctx.lineTo(10, 60);
	// ctx.stroke();



		// отрисовывание человечка с помощью moveTo, lineTo
	// ctx.lineWidth = 4;
	// ctx.strokeRect(10,10, 20, 20)
	// ctx.beginPath();
	// 	//туловище
	// ctx.moveTo(20, 30);
	// ctx.lineTo(20, 80);

	// 	//руки
	// ctx.moveTo(20, 47);
	// ctx.lineTo(0, 40);
	// ctx.moveTo(20, 47);
	// ctx.lineTo(40, 40);

	// 	//ноги
	// ctx.moveTo(20, 79);
	// ctx.lineTo(0, 120);
	// ctx.moveTo(20, 79);
	// ctx.lineTo(40, 120);
	// ctx.stroke();


	//Рисование дуг и окружностей
//--------------------------------------------------

	// ctx.lineWidth = 2;
	// ctx.strokeStyle = "Green";

	// ctx.beginPath();
	// ctx.arc(50,50, 20, 0, Math.PI / 2, false);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(100,50, 20, 0, Math.PI, false);
	// ctx.stroke();

	// ctx.beginPath();
	// ctx.arc(150,50, 20, 0, Math.PI * 2, false);
	// ctx.stroke();


	// Упрощение рисования окружности с помощью функции
	// let circle = function (x, y, radius, bul) {
	// 	ctx.beginPath();
	// 	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	// 	if (bul) {
	// 		ctx.fill();
	// 	} else{
	// 		ctx.stroke();
	// 	}
		
	// };
	// ctx.lineWidth = 4;

	// ctx.strokeStyle = "Red";

	// circle(100, 100, 10);

	// ctx.strokeStyle = "Orange";
	// circle(100, 100, 20);

	// ctx.strokeStyle = "Yellow";
	// circle(100, 100, 30);

	// ctx.strokeStyle = "Green";
	// circle(100, 100, 40);

	// ctx.strokeStyle = "Blue";
	// circle(100, 100, 50);

	// ctx.strokeStyle = "Purple";
	// circle(100, 100, 60);



	// --Снеговик--
	// circle(50, 40, 30);
	// circle(50, 110, 40);
	// circle(40, 30, 5, true);
	// circle(60, 30, 5, true);
	// circle(50, 90, 5, true);
	// circle(50, 110, 5, true);
	// circle(50, 130, 5, true);
	// ctx.fillStyle = "Orange";
	// circle(50, 40, 5, true);




			//УПРАЖНЕНИЯ
//--------------------------------------------------

		// 1. Функция, рисующая снеговика
	// ctx.lineWidth = 4;

	// let circle = function (x, y, radius, bul) {
	// 	ctx.beginPath();
	// 	ctx.arc(x, y, radius, 0, Math.PI * 2, false);
	// 	if (bul) {
	// 		ctx.fill();
	// 	} else{
	// 		ctx.stroke();
	// 	}
		
	// };

	// function drawSnowman(x, y) {
	// 	// -голова-
	// 	circle(40+x, 30+y, 30); 
	// 	circle(30+x, 20+y, 5, true);
	// 	circle(50+x, 20+y, 5, true);
	// 	ctx.fillStyle = "Orange";
	// 	circle(40+x, 30+y, 5, true);

	// 	// -тело-
	// 	ctx.fillStyle = "Black";
	// 	circle(40+x, 100+y, 40);
	// 	circle(40+x, 80+y, 5, true);
	// 	circle(40+x, 100+y, 5, true);
	// 	circle(40+x, 120+y, 5, true);
	// };

	// drawSnowman(50,50);

//--------------------------------------------------



			// 2. Рисование по массиву точек
//--------------------------------------------------

	// let mysteryPoints = [[50,50], [50,100], [25, 120], [100, 50], [70,90], [100, 90], [70,120]];

	// function drawPoints(points) {
		
	// 	ctx.beginPath();	
	// 	ctx.moveTo(points[0][0], points[0][1]);
	// 	ctx.lineTo(points[1][0], points[1][1]);
	// 	ctx.lineTo(points[2][0], points[2][1]);
	// 	ctx.lineTo(points[3][0], points[3][1]);
	// 	ctx.lineTo(points[4][0], points[4][1]);
	// 	ctx.lineTo(points[5][0], points[5][1]);
	// 	ctx.lineTo(points[6][0], points[6][1]);
	// 	ctx.stroke();
	// }


	// drawPoints(mysteryPoints);
//--------------------------------------------------



			// 3. Рисование мышкой
//--------------------------------------------------
	// $('#canvas').mousemove(function (e) {
	// 	ctx.beginPath();
	// 	ctx.arc(e.clientX-7, e.clientY-7, 3, 0, Math.PI * 2, false);
	// 	ctx.fill();
	// })

});