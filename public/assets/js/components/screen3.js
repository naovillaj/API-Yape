const screen3 = (update) => {
	const divCodigo = $("<div id='divCodigo' class='container'></div>");
	const rowMensaje = $("<div class='row'></div>");
	const rowCodigo = $("<div class='row'></div>");
	const mensaje = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/message.png'><h3>Ahora ingresa tu código</h3><h5 id='sms'>Enviamos un SMS con el código de validación al número " + "<strong> 99999999 </strong>" + "</h5></div>");
	const inputCodigo = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='codigo' type='password' class='form-control' maxlength='6' aria-describedby='basic-addon1'></div>");
	const reintentar = $("<div class='col-xs-10 text-center'><span id='reintentar'></span></div>");
	
	// " + state.yapeUser.data.phone + "

	var counter = 21;
	var interval = setInterval(function() {
	    counter--;
	    $('#reintentar').html("Reintentar en <img id='clock' src='assets/img/icons/clock.png'>"+ counter);
	    // Display 'counter' wherever you want to display it.
	    if (counter == 0) {
	        // Display a login box
	        clearInterval(interval);
	    }
	}, 1000);

	divCodigo.append(rowMensaje);
	divCodigo.append(rowCodigo);
	rowMensaje.append(mensaje);
	rowCodigo.append(inputCodigo);
	rowCodigo.append(reintentar);


	// if($('#celular').val().length == 9)

	inputCodigo.on('keyup', (e) =>{

		if($('#codigo').val().length == 6 ){
			    
			state.screen = "screen4";
			console.log(state.screen);
			update();
		}
			
	})	


	// $('#celular').keypress(soloNumeros);

	return divCodigo;
}

