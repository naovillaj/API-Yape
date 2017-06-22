const screen8 = (update) =>{
	const divFinal = $("<div class='container text-center'></div>");
	const rowFeliz = $("<div class='row feliz marginTop'></div>");
	const rowMovimientos = $("<div class='row movimientos'></div>");
	const divRueda = $("<div class='col-xs-1 col-xs-offset-9 pull-right'><img src='assets/img/icons/engine.png'></div>")
	const divBien = $("<div class= 'col-xs-12 text-center' style='width:100%'><img src='assets/img/icons/happy-face.png'><h2> Hola </h2><h3><span><img src='assets/img/icons/eye.png'></span>Mostrar Saldo</h3></div>");
	const divMovimientos = $("<div class='col-xs-6 pull-left'><span>ÚLTIMOS MOVIMIENTOS</span></div><div class='col-xs-1 col-xs-offset-4 pull-right'><img src='assets/img/icons/right-arrow-circular-button.png'></div><hr>")
	const divFiu =  $("<div class='col-xs-5 pull-left'><span><img src='assets/img/icons/icon.png'></span></div><div class='col-xs-3 pull-right'><h4>¿Aún no realizas tu primer pago?</h4><p>Es rápido y sencillo</p></div>");
	const divPago = $("<div class='col-xs-6 text-center'><img src='assets/img/icons/send.png'></div><div class='col-xs-6 text-center'><img src='assets/img/icons/code-qr.png'></div>")

	divFinal.append(rowFeliz);
	divFinal.append(rowMovimientos);
	rowFeliz.append(divRueda);
	rowFeliz.append(divBien);
	rowMovimientos.append(divMovimientos);
	rowMovimientos.append(divFiu);
	rowMovimientos.append(divPago);

	return divFinal;
}
