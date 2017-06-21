const screen2 = (update) => {
	const divInicio = $("<div id='divInicio' class='container'></div>");
	const rowCel = $("<div class='row'></div>");
	const rowInput = $("<div class='row'></div>");
	const rowContinuar = $("<div class='row'></div>");
	// const divCel = $("<div class='text-center'></div>");
	const cel = $("<div class= 'col-xs-12 text-center inicio' style='width:350px'><img src='assets/img/icons/phone.png'><h3> Para comenzar validemos tu número</h3><h5>Recibirás un SMS con un código de validación</h5></div>");
	const inputCel = $("<div class='col-xs-10 text-center input-group inputCel'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/phoneandnumber.png'></span><input id='celular' type='tel' class='form-control' pattern='^([9]\d{8})+$' maxlength='9' aria-describedby='basic-addon1'></div>");
	const terminos = $("<div class='col-xs-10 text-center'><input id='checkbox' type='checkbox'>Acepto los <a id='terminos' href='#'>Términos y condiciones</a></div>")
	const btnContinuar = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-val' type='button' class='btn btn-lg' disabled='disabled'>CONTINUAR</button></div>")

	divInicio.append(rowCel);
	divInicio.append(rowInput);
	divInicio.append(rowContinuar);
	rowCel.append(cel);
	rowInput.append(inputCel);
	rowInput.append(terminos);
	rowContinuar.append(btnContinuar);

	$('#checkbox').on('change', (e) =>{
		e.preventDefault();
		const inputVal = $('#celular').val();
		const checkVal = $('#checkbox')[0].attr('checked');
		const btnVal = $('#btn-val');

		// if((inputVal.type = 'number' && inputVal.length == 9) && checkVal== 'true'){

		if(inputVal.length == 9 && checkVal== 'true'){
			validar(inputVal, checkVal);
			btnVal.prop('disabled', '');
			btnVal.css('background-color', '#fbd43b');
		} else {
			btnVal.prop('disabled', 'disabled');
		}
	})

	// const soloNumeros = function(e){
	// 	var codigoNumero = e.keyCode;
	//
	// 	if(codigoNumero>=48 && codigoNumero<= 57 && this.value.length<2){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
	//
	// $('#celular').keypress(soloNumeros);

	return divInicio;
}

const validar = (cel, check) =>{
	$post('api/RegisterNumber', {phone: cel, terms: check}, function(val){
		console.log(val);
		status.yapeUser = val;
	});
}
