const screen2 = (update) => {
	const divInicio = $("<div id='divInicio' class='container'></div>");
	const rowCel = $("<div class='row'></div>");
	const rowInput = $("<div class='row'></div>");
	const rowContinuar = $("<div class='row'></div>");
	const divCel = $("<div class='text-center'></div>");
	const cel = $("<div class= 'col-xs-12 text-center item inicio' style='width:250px'><img src='assets/img/icons/phone.png'><h2> Para comenzar validemos tu número</h2><h4>Recibirás un SMS con un código de validación</h4></div>");
	const inputCel = $("<div class='input-group'><span class='input-group-addon' id='basic-addon1'><img src='ssets/img/icons/phoneandnumber.png'></span><input type='text' class='form-control' aria-describedby='basic-addon1'></div>")
	const btnContinuar = $("<div class='col-xs-12 text-center btn-continuar'><button type='button' class='btn btn-lg' disabled='disabled'>CONTINUAR</button></div>")
		
	divInfo.append(rowImg);
	divInfo.append(rowBtn)
	rowImg.append(divImg);
	divImg.append(img1);
	divImg.append(img2);
	divImg.append(img3);
	rowContinuar.append(btnContinuar);	        

	return divInicio;
}	


