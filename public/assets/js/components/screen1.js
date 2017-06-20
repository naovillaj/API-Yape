// "use strict";

const screen1 = (update) =>{
	const divInfo = $("<div id='info' class='container'></div>");
	const rowImg = $("<div id='jssor_1' class='row'></div>");
	const rowBtn = $("<div class='row'></div>");
	const divImg = $("<div data-u='slides'></div>");
	const img1 = $("<div class= 'col-xs-12 text-center'><img data-u='image' src='assets/img/icons/icon-people.png'><h2> Paga a tus amigos</h2><h3>Paga a quien quieras desde donde quieras, sin usar efectivo.</h3></div>");
	const img2 = $("<div class= 'col-xs-12 text-center'><img data-u='image' src='assets/img/icons/happy-person.png'><h2> Sin número de cuenta</h2><h3>Elige a quién pagar desde tu lista de contactos.</h3></div>");
	const img3 = $("<div class= 'col-xs-12 text-center'><img data-u='image' src='assets/img/icons/group-people.png'><h2> Gratis y Seguro</h2><h3>La transferencia es inmediata y gratuita de una cuenta a otra.</h3></div>");
	const navigator = $("<div data-u='navigator' class='jssorb05' data-autocenter='1'><div data-u='prototype'></div></div>");
	const btn = $("<div class= 'col-xs-12 text-center'><button type='button' class='btn btn-lg'>REGISTRARME</button></div>")
	
	divInfo.append(rowImg);
	divInfo.append(rowBtn)
	rowImg.append(divImg);
	divImg.append(img1);
	divImg.append(img2);
	divImg.append(img3);
	rowImg.append(navigator);
	rowBtn.append(btn);
	

	return divInfo;
}