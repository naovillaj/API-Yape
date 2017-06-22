	const screen4 = (update) => {
	const divUsuario = $("<div id='divUsuario' class='container'></div>");
	const rowUsuario = $("<div class='row'></div>");
	const rowDatos = $("<div class='row'></div>");
	const rowBtn = $("<div class='row'></div>");
	const usuario = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/lockone.png'><h3>Crea tu usuario Yape</h3><h5>Ingresa un nombre, email y clave de usuario.</h5></div>");
	const inputNombre = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/user.png'></span><input id='nombre' type='text' class='form-control' placeholder='Nombre' aria-describedby='basic-addon1'></div>");
	const inputCorreo = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/message-gray.png'></span><input id='email' type='email' class='form-control' placeholder='correo@ejemplo.com' aria-describedby='basic-addon1'></div>");
	const inputClave = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='password' type='password' class='form-control' placeholder='Ingresa Clave de 6 dígitos' maxlength='6' aria-describedby='basic-addon1'></div>");
	const pAlerta = $("<div class='col-xs-12 text-center'><p>Cuida esta clave como oro, es tu acceso a Yape</p></div>")
	const crearCuenta = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-cuenta' type='button' class='btn btn-lg' disabled='disabled'>CREAR CUENTA</button></div>");
	// " + state.yapeUser.data.phone + "

	divUsuario.append(rowUsuario);
	divUsuario.append(rowDatos);
	divUsuario.append(rowBtn);
	rowUsuario.append(usuario);
	rowDatos.append(inputNombre);
	rowDatos.append(inputCorreo);
	rowDatos.append(inputClave);
	rowDatos.append(pAlerta);
	rowBtn.append(crearCuenta);


	// if($('#celular').val().length == 9)

	inputNombre.on('keyup', (e) =>{
		// alert("inputNombre");
		if($('#nombre').val().length >= 2){
			// alert("hola");
			if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
				// alert("hoa");
				if($('#password').val().length == 6){
					// alert("la");
					$('#btn-cuenta').prop('disabled', false);
					$('#btn-cuenta').css('background-color', '#fbd43b');
					$('#btn-cuenta').css('color', 'white');			
					$('#btn-cuenta').on('click',() => {
						// validar($('#celular').val(), checkVal);
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});		
				} else{
					$('#btn-cuenta').prop('disabled', true);
				}
			}else{
				$('#btn-cuenta').prop('disabled', true);
			}
		}else{
			$('#btn-cuenta').prop('disabled', true);
		}		
	})

	inputCorreo.on('keyup', (e) =>{
		// alert("inputCorreo");
		if($('#nombre').val().length >= 2){
			// alert("hola");
			if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
				alert("hoa");
				if($('#password').val().length == 6){
					// alert("la");
					$('#btn-cuenta').prop('disabled', false);
					$('#btn-cuenta').css('background-color', '#fbd43b');
					$('#btn-cuenta').css('color', 'white');			
					$('#btn-cuenta').on('click',() => {
						// validar($('#celular').val(), checkVal);
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});		
				} else{
					$('#btn-cuenta').prop('disabled', true);
				}
			}else{
				$('#btn-cuenta').prop('disabled', true);
			}
		}else{
			$('#btn-cuenta').prop('disabled', true);
		}		
	})

	inputClave.on('keyup', (e) =>{
		// alert("inputClave");
		if($('#nombre').val().length >= 2){
			// alert("hola");
			if(/^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/.test($('#email').val())){
				// alert("hoa");
				if($('#password').val().length == 6){
					// alert("la");
					$('#btn-cuenta').prop('disabled', false);
					$('#btn-cuenta').css('background-color', '#fbd43b');
					$('#btn-cuenta').css('color', 'white');			
					$('#btn-cuenta').on('click',() => {
						// validar($('#celular').val(), checkVal);
						state.screen = "screen5";
						console.log(state.screen);
						update();
					});		
				} else{
					$('#btn-cuenta').prop('disabled', true);
				}
			}else{
				$('#btn-cuenta').prop('disabled', true);
			}
		}else{
			$('#btn-cuenta').prop('disabled', true);
		}		
			
	})	


	// $('#celular').keypress(soloNumeros);

	return divUsuario;
}