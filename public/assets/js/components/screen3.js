const screen3 = (update) => {
  console.log(state.yapePhone);
  const divCodigo = $("<div id='divCodigo' class='container marginTop widthcar'></div>");
  const rowMensaje = $("<div class='row'></div>");
  const rowCodigo = $("<div class='row'></div>");
  const mensaje = $("<div class= 'col-xs-12 text-center inicio' style='width:100%'><img src='assets/img/icons/message.png'><h3>Ahora ingresa tu código</h3><h5 id='sms'>Enviamos un SMS con el código de validación al número " + "<strong>"+ localStorage.getItem('cellphone') +"</strong>" + "</h5></div>");
  const inputCodigo = $("<div class='col-xs-10 text-center input-group inputCod' id='container-code'><span class='input-group-addon' id='basic-addon1'><img src='assets/img/icons/lock.png'></span><input id='codigo' type='password' class='form-control' maxlength='6' aria-describedby='basic-addon1'></div>");
  const reintentar = $("<div class='col-xs-10 text-center msje'><span id='reintentar'></span></div>");
  const codigo = $("<div class='col-xs-10 text-center msje'><span id='code'></span></div>");

  console.log(state.yapePhone);

  var counter = 21;
  var interval = setInterval(function() {
    $('#reintentar').html("Reintentar en <img id='clock' src='assets/img/icons/clock.png'>"+ counter);
    $('#code').html("Tu código es <b>"+ state.yapeCode + "</b>");
    if (counter > 0) {
      counter--;
    }else{
      counter = 21;
      $.post('/api/resendCode',{phone:state.yapePhone} ,(info) =>{
        console.log(state.yapePhone);
        console.log(info);
        console.log(info.data);
        state.yapeCode = info.data;
        console.log(state.yapeCode);
        $('#code').html("Tu código es <b>"+ state.yapeCode + "</b>");
      })
    }
  }, 1000);

  divCodigo.append(rowMensaje);
  divCodigo.append(rowCodigo);
  rowMensaje.append(mensaje);
  rowCodigo.append(codigo);
  rowCodigo.append(inputCodigo);
  rowCodigo.append(reintentar);

  inputCodigo.on('keyup', (e) =>{
    if($('#codigo').val().length == 6){
      if($('#codigo').val()==state.yapeCode){
        $('#container-code').removeClass('red-bottom');
        clearInterval(interval);
        console.log(state.yapeCode);
        state.screen = "screen4";
        console.log(state.screen);
        update();
      }else{
        $('#container-code').addClass('red-bottom');
        $('#codigo').val("");
      }
    }
  })

  return divCodigo;
}
