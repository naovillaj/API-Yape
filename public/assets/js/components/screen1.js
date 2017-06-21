// "use strict";
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    responsive:{
        0:{
            items:1}
        },

  })
});

const screen1 = (update) =>{
	const divInfo = $("<div id='info' class='container'></div>");
	const rowImg = $("<div class='row'></div>");
	const rowBtn = $("<div class='row'></div>");
	const divImg = $("<div class='text-center owl-carousel owl-theme'></div>");
	const img1 = $("<div class= 'col-xs-12 text-center item inicio' style='width:350px'><img src='assets/img/icons/icon-people.png'><h2> Paga a tus amigos</h2><h4>Paga a quien quieras desde donde quieras, sin usar efectivo.</h4></div>");
	const img2 = $("<div class= 'col-xs-12 text-center item inicio' style='width:350px'><img src='assets/img/icons/happy-person.png'><h2> Sin número de cuenta</h2><h4>Elige a quién pagar desde tu lista de contactos.</h4></div>");
	const img3 = $("<div class= 'col-xs-12 text-center item inicio' style='width:350px'><img src='assets/img/icons/group-people.png'><h2> Gratis y Seguro</h2><h4>La transferencia es inmediata y gratuita de una cuenta a otra.</h4></div>");
	const btn = $("<div class='col-xs-12 text-center btn-inicio'><button type='button' class='btn btn-lg'>REGISTRARME</button></div>")

	divInfo.append(rowImg);
	divInfo.append(rowBtn)
	rowImg.append(divImg);
	divImg.append(img1);
	divImg.append(img2);
	divImg.append(img3);
	rowBtn.append(btn);

	btn.on('click',() => {
    console.log(state.screen);
    state.screen = "screen2";
    update();
});

	return divInfo;
}
