document.addEventListener('DOMContentLoaded', function(){

	let canvas = document.getElementById('canvas');

	let ctx = canvas.getContext("2d");
	
	for(var i = 0; i < 8; i++){
		ctx.fillRect(i*10, i*10, 10, 10);
	}
    

});