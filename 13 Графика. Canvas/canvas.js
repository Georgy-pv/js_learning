document.addEventListener('DOMContentLoaded', function(){

	let canvas = document.getElementById('canvas');

	let ctx = canvas.getContext("2d");
	
	ctx.fillRect(50,0,50,50);    
	ctx.fillRect(70,50,10,20); 

	ctx.fillRect(0,70,40,10);    
	ctx.fillRect(110,70,40,10);    
	
	ctx.fillRect(40,70,70,70);

	ctx.fillRect(40,140,10,50);    
	ctx.fillRect(100,140,10,50);    

});