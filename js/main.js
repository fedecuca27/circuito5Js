let cuotas = 0;
let productoInner = document.getElementById ("productoId");
let colorInner = document.getElementById ("colorId");
let marcaInner = document.getElementById ("marcaId");
let codigoInner = document.getElementById ("codigoId");
let retiroInner = document.getElementById ("retiroId");
let precioFinalInner = document.getElementById ("precioFinalId");
let resultadoSimuladorInner = document.getElementById ("resultadoSimuladorId");

console.log (resultadoSimuladorInner.innerText);


let mailPedido = document.getElementById ("mailPresupuesto");
let comentarioPedido = document.getElementById ("comentarioPresupuesto");
let btnPedido = document.getElementById ("btnEnviar");
let avisoEnvioHtml = document.getElementById ("avisoEnvio");
mailPedido.addEventListener("change" , mailCliente);
comentarioPedido.addEventListener("change" , comentarioCliente);
btnPedido.addEventListener("submit" , respuestaBtn);


function respuestaBtn(entregaFormulario) {
    entregaFormulario.preventDefault();
    console.log ("El cliente envio el formulario.");
    avisoEnvioHtml.innerHTML = "<h5>Tu consulta fue enviada, a la brevedad vas a recibir una respuesta!</h5>";

    
}
function mailCliente () {
    console.log ("El mail del cliente es: " + mailPedido.value);
    
}
function comentarioCliente () {
    console.log ("El cliente dejo el siguiente comentario: " + comentarioPedido.value);
}

function alertaEnvio () {
    Swal.fire({
        title: 'Esta seguro que desea enviar la consulta?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `Mejor NO`,
        /* Read more about isConfirmed, isDenied below */
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Su consulta fue enviada!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Su consulta no fue enviada.', '', 'warning')
        }
      })
}
  
  document.getElementById("alertaEnviar").addEventListener("click",alertaEnvio);

  function validarMail () {
    let mail = document.getElementById("mailPresupuesto").value;
    let resdultValidar = document.getElementById ("resultadoValidar");

    if (mail.indexOf("@") == -1) {
      resdultValidar.innerHTML = "<p> Ingrese un email valido! </p> ";
    }
    else {
      resdultValidar.innerHTML = "";
    }
  }

  document.getElementById ("alertaEnviar").addEventListener("click", validarMail)