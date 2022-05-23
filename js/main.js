let cuotas = 0;
let productoInner = document.getElementById ("productoId");
let colorInner = document.getElementById ("colorId");
let marcaInner = document.getElementById ("marcaId");
let codigoInner = document.getElementById ("codigoId");
let retiroInner = document.getElementById ("retiroId");
let precioFinalInner = document.getElementById ("precioFinalId");
let resultadoSimuladorInner = document.getElementById ("resultadoSimuladorId");

/*function efectivo(valor) {
    let precio = parseFloat( prompt ("Ingrese el costo del producto"));
    let interes = 10;
    alert ("El costo de su producto es $" + (precio - ((precio * interes) / 100)));
    precioFinalInner.innerHTML = ("El costo de su producto es $" + (precio - ((precio * interes) / 100)));
    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
}

function debito() {
    let precio = parseFloat( prompt ("Ingrese el costo del producto"));
    let interes = 0;
    alert ("El costo de su producto es $" + (precio) + " ,recuerde nuestros descuentos abonando en efectivo!");
    precioFinalInner.innerHTML = ("El costo de su producto es $" + (precio));
    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
}

function credito() {
    let precio = parseFloat( prompt ("Ingrese el costo del producto"));
    let interes = 1.15;
    let cuotas = parseInt( prompt ("Ingrese la cantidad de cuotas a calcular."));
    alert ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    if (cuotas > 3) {
        alert ("El maximo de cuotas con tarjeta de credito es de 3");  
    }
    precioFinalInner.innerHTML = ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    if (precio >1000) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
}

function mercadoPago() {
    let precio = parseFloat( prompt ("Ingrese el costo del producto"));
    let interes = 1.1;
    let cuotas = parseInt( prompt ("Ingrese la cantidad de cuotas a calcular."));
    alert ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    if (cuotas > 12) {
        alert ("El maximo de cuotas con Mercado Pago es de 12")
    }
    precioFinalInner.innerHTML =  "El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas);
    if (precio >1200) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
}
*/

/*class articulo {
    constructor (nombre, color, marca) {
    this.nombre = nombre;
    this.color = color;
    this.marca = marca;
    }
}

const lugarRetiro = [articulo, " Sucursal 1" , "Villa Pueyrredon" , "Cp. 1419"];*/
//let nombreArt = prompt ("Ingrese el nombre del producto");
//let colorArt = prompt ("Ingrese el color del producto");
//let marcaArt = prompt ("Ingrese la marca del producto");
//const articuloUno = new articulo (nombreArt, colorArt, marcaArt);
//alert ("Usted esta buscando cotizacion del producto: " + articuloUno.nombre + " color " + articuloUno.color + " de la marca " + articuloUno.marca);
//console.log (articuloUno); 
//let codigoArt = parseInt (prompt ("Ingrese el codigo de su producto"));
//producto.unshift (codigoArt);
//console.log (producto);
//alert ("El pedido es por " + articuloUno.nombre + " el mismo sera retirado por la " + producto[2] + " en la localidad de " + producto[3]);

/*let i = 0;
for (i; i<=10; i++) {
    let tipoDePago = parseInt( prompt ("Ingrese el medio de pago que desea utilizar, 1 Efectivo, 2 Tarjeta de debito, 3 Tarjeta de credito, 4 MercadoPago o esc para salir"));
    if (tipoDePago == 1) {
        efectivo();
    } 
    if (tipoDePago == 2) {
        debito();
    }
    if (tipoDePago ==3) {
        credito();
        if( cuotas > 3) {
            break;
        }
    }
    if (tipoDePago == 4) {
        mercadoPago();
        if (cuotas > 12) {
            break;
        }
    }
    if (tipoDePago > 4) {
        alert ("Su opcion no es valida, por favor intente nuevamente")
    }
    else {
        break;
    }
}
*/
//productoInner.innerHTML = "Producto: " + articuloUno.nombre;

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
