const screen6 = (update) => {
	const divTarjeta = $("<div id='divCodigo' class='container marginTop'></div>");
	const rowAsk = $("<div class='row'><div class='col-xs-1 col-xs-offset-9 question'><img src='assets/img/icons/question.png'></div></div>");
	const rowTarjeta = $("<div class='row'></div>");
	const rowNumTarjeta = $("<div class='row'></div>");
	const rowFechaVenc = $("<div class='row'></div>");
	const rowBtnCont = $("<div class='row'></div>");
	const tarjeta = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/bcp-logo.png'><h3>Registra tu tarjeta débito BCP</h3><h5>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</h5></div>");
	const inputTarjeta = $("<div class='col-xs-10 text-center input-group inputCod'><span class='input-group-addon padd' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='tarjeta' type='text' class='form-control' maxlength='16' aria-describedby='basic-addon1'><div class='escanear'><img src='assets/img/icons/scan.png'>Escanear tarjeta</div></div>");
	const inputFecha = $("<div class='col-xs-3 text-center inputFecha'><span>Fecha de Vencimiento</span><input id='mes' type='text' class='form-control' maxlength='2' placeholder='Mes' aria-describedby='basic-addon1'> / <input id='year' type='text' class='form-control' maxlength='2' placeholder='Año' aria-describedby='basic-addon1'></div>");
	const btnContinuar = $("<div class='col-xs-12 text-center btn-continuar'><button id='btn-cont' type='button' class='btn btn-lg' disabled='disabled'>CONTINUAR</button></div>");

	divTarjeta.append(rowAsk);
	divTarjeta.append(rowTarjeta);
	divTarjeta.append(rowNumTarjeta);
	divTarjeta.append(rowFechaVenc);
	divTarjeta.append(rowBtnCont);
	rowTarjeta.append(tarjeta);
	rowNumTarjeta.append(inputTarjeta);
	rowFechaVenc.append(inputFecha);
	rowBtnCont.append(btnContinuar);

	var soloNumeros = function(e){
        var codigoNumero = e.keyCode;

        if(codigoNumero>=48 && codigoNumero<= 57 && this.value.length<2){
          return true;
        }else{
          return false;
        }
      }

    $('#tarjeta').keypress= soloNumeros;  


	inputTarjeta.on('keyup', (e) =>{

		if($('#tarjeta').val().length == 16 ){
			if(/^[0-1]{1}[0-9]{1}$/.test($('#mes').val()) && ($('#mes').val()>=01 && $('#mes').val()<=12) ){
				if(/^[1-2]{1}[4-7]{1}$/.test($('#year').val()) && ($('#year').val()>=17 && $('#year').val()<=24)){
					$('#btn-cont').prop('disabled', false);
					$('#btn-cont').css('background-color', '#fbd43b');
					$('#btn-cont').css('color', 'white');
					$('#btn-cont').on('click',() => {
						// validar($('#celular').val(), checkVal);
						state.screen = "screen7";
						console.log(state.screen);
						update();
					});
				}else{
					$('#btn-cont').prop('disabled', true);
				}
			}else{
				$('#btn-cont').prop('disabled', true);
				}
		}else{
			$('#btn-cont').prop('disabled', true);
			}
	})

	inputFecha.on('keyup', (e) =>{
		// && ($('#year').val()>=17 && $('#year').val()<=24)
		
		if($('#tarjeta').val().length == 16 && /^[0-9]{16}$/.test($('#tarjeta').val())){
			if(/^[0-1]{1}[0-9]{1}$/.test($('#mes').val()) && ($('#mes').val()>=01 && $('#mes').val()<=12)  ){
				if(/^[1-2]{1}[4-7]{1}$/.test($('#year').val()) ){
					$('#btn-cont').prop('disabled', false);
					$('#btn-cont').css('background-color', '#fbd43b');
					$('#btn-cont').css('color', 'white');
					$('#btn-cont').on('click',() => {
						state.yapeCard = $('#tarjeta').val();
						state.yapeMonth = $('#mes').val();
						state.yapeYear = $('#year').val();					
						state.screen = "screen7";
						console.log(state.screen);
						update();
					});
				}else{
					$('#btn-cont').prop('disabled', true);
				}
			}else{
				$('#btn-cont').prop('disabled', true);
				}
		}else{
			$('#btn-cont').prop('disabled', true);
			}

	})

	return divTarjeta;
}



