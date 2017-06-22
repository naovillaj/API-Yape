const screen3 = (update) => {
	const divCodigo = $("<div id='divCodigo' class='container marginTop'></div>");
	const rowMensaje = $("<div class='row'></div>");
	const rowCodigo = $("<div class='row'></div>");
	const mensaje = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/message.png'><h3>Ahora ingresa tu código</h3><h5 id='sms'>Enviamos un SMS con el código de validación al número " + "<strong>"+ state.yapePhone +"</strong>" + "</h5></div>");
	const inputCodigo = $("<div class='col-xs-10 text-center input-group inputCod'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='codigo' type='password' class='form-control' maxlength='6' aria-describedby='basic-addon1'></div>");
	const reintentar = $("<div class='col-xs-10 text-center msje'><span id='reintentar'></span></div>");

	console.log(state.yapePhone);

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
		if($('#codigo').val().length == 6){
			if($('#codigo').val()==state.yapeCode){
				console.log(state.yapeCode);
				state.screen = "screen4";
				console.log(state.screen);
				update();
			}else{
				alert("hola");
				$('#codigo').val("");
				$.post('api/resendCode',{phone:state.yapePhone} ,(info) =>{
						console.log(info);
						console.log(info.data);
						state.yapeCode = info.data;
						console.log(state.yapeCode);

					})

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
			}
		}



	})


	// $('#celular').keypress(soloNumeros);

	return divCodigo;
}
