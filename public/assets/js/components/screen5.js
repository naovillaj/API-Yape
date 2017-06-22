const screen5 = (update) =>{
	const divCheck = $("<div id='check' class='container text-center'></div>");
	const rowCheck = $("<div class='row'></div>");	
	const divBien = $("<div class= 'col-xs-12 text-center' style='width:100%'><img src='assets/img/icons/check.png'><h2> ¡Bien! </h2><h2>Ahora puedes usar Yape</h2></div>");
	

	divCheck.append(rowCheck);
	rowCheck.append(divBien);
	
	setTimeout(function(){ 
		state.screen = "screen6";
	    console.log(state.screen);
	    update();
     }, 3000);
	

	return divCheck;
}
