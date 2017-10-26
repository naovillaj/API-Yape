const screen8 = (update) =>{
	const divFinal = $("<div class='container text-center widthcar'></div>");
	const rowFeliz = $("<div class='row feliz'></div>");
	const rowMovimientos = $("<div class='row movimientos'></div>");
	const divRueda = $("<div class='col-xs-2 col-xs-offset-7 pull-right engine'><img src='assets/img/icons/engine.png'></div>")
	const divBien = $("<div class= 'col-xs-12 text-center cara'  style='width:100%'><img src='assets/img/icons/happy-face.png'><h2> Hola </h2><h3 class='saldo'><span><img src='assets/img/icons/eye.png'></span>Mostrar Saldo</h3></div>");
	const divMovimientos = $("<div class='margleft'><div class='col-xs-9 pull-left'><span class='ultMov'>ÚLTIMOS MOVIMIENTOS</span></div><div class='col-xs-2 pull-right'><img src='assets/img/icons/right-arrow-circular-button.png'></div></div><hr>")
	const divFiu =  $("<div class='fiu'><div class='col-xs-6 pull-left'><span class='icon'><img src='assets/img/icons/icon.png'></span></div><div class='col-xs-5 pagoh5 text-left'><h5>¿Aún no realizas tu primer pago?</h5><h5>Es rápido y sencillo</h5></div></div>");
	const divPago = $("<div class='pagos'><div class='col-xs-6 text-center enviarh4'><img src='assets/img/icons/send.png'><h5>ENVIAR PAGO</h5></div><div class='col-xs-6 text-center enviarh4'><img src='assets/img/icons/code-qr.png'><h5>RECIBIR PAGO</h5></div></div>");

	divFinal.append(rowFeliz);
	divFinal.append(rowMovimientos);
	rowFeliz.append(divRueda);
	rowFeliz.append(divBien);
	rowMovimientos.append(divMovimientos);
	rowMovimientos.append(divFiu);
	rowMovimientos.append(divPago);

	return divFinal;
}
