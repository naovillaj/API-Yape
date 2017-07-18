const screen2 = (update) => {
	const divInicio = $("<div id='divInicio' class='container marginTop widthcar'></div>");
	const rowCel = $("<div class='row'></div>");
	const rowInput = $("<div class='row'></div>");
	const rowContinuar = $("<div class='row'></div>");
	const cel = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/phone.png'><h3> Para comenzar validemos tu número</h3><h5>Recibirás un SMS con un código de validación</h5></div>");
	const inputCel = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/phoneandnumber.png'></span><input id='celular' type='text' class='form-control' maxlength='9' aria-describedby='basic-addon1'></div>");
	const terminos = $("<div class='col-xs-10 text-center msje'><input id='checkbox' type='checkbox'>Acepto los <a id='terminos' href='#'>Términos y condiciones</a></div>")
	const btnContinuar = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-val' type='button' class='btn btn-lg' disabled='disabled'>CONTINUAR</button></div>")
	
	divInicio.append(rowCel);
	divInicio.append(rowInput);
	divInicio.append(rowContinuar);
	rowCel.append(cel);
	rowInput.append(inputCel);
	rowInput.append(terminos);
	rowContinuar.append(btnContinuar);
	
	var soloNumeros = function(e){
	    var codigoNumero = e.keyCode;

	    if(codigoNumero>=48 && codigoNumero<= 57 && this.value.length<2){
	      return true;
	    }else{
	      return false;
	    }
  	}

    $('#celular').keypress= soloNumeros;  

	inputCel.on('keyup', (e) =>{

		const inputVal = inputCel.val();
		console.log($('#celular').val());
		console.log(inputVal);
		const checkVal = $('#checkbox').is(':checked');

		if($('#celular').val().length == 9 && /^([9]\d{8})+$/.test($('#celular').val())){
			if($('#checkbox').prop('checked') == true){
				$('#btn-val').prop('disabled', false);
				$('#btn-val').css('background-color', '#fbd43b');
				$('#btn-val').css('color', 'white');
				
				$('#btn-val').on('click',() => {
					validar($('#celular').val(), checkVal);
					state.screen = "screen3";
					console.log(state.screen);
					update();
				});
			}else{
				$('#btn-val').prop('disabled', true);
			}
		} else {
			$('#btn-val').prop('disabled', true);
		}
	})



	terminos.on('change', (e) =>{

		const inputVal = inputCel.val();
		const checkVal = $('#checkbox').prop('checked');

		if(checkVal==true){
			if($('#celular').val().length == 9 && /^([9]\d{8})+$/.test($('#celular').val())){
				$('#btn-val').prop('disabled', false);
				$('#btn-val').css('background-color', '#fbd43b');
				$('#btn-val').css('color', 'white');

				$('#btn-val').on('click',() => {
					validar($('#celular').val(), checkVal);
	    			state.screen = "screen3";
	    			console.log(state.screen);
	    			update();
				});

			} else {
				$('#btn-val').prop('disabled', true);
				}
		}else {
			$('#btn-val').prop('disabled', true);
		}
	})

	return divInicio;
}

var validar = (cel, check) =>{
	console.log(cel, check);
	$.post('api/RegisterNumber', {phone: cel, terms: check}, function(val){
		// console.log(val);
		// console.log(val.data.code);
		// console.log(val.data.phone);
		// console.log(val.data.terms);
		// alert(val.data.code);
		state.yapeCode = val.data.code;
		state.yapePhone = val.data.phone;
		state.yapeTerms = val.data.terms;
		// console.log(state.yapeCode);
		console.log(state.yapePhone);
		// console.log(state.yapeTerms);
	});
}
