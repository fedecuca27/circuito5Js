//se que esta misma funcion la repeti varias veces cuando en realidad es para evitar repetir codigo, pero le fui cambiando el nombre y dejandola arriba de donde la necesitaba para ahorrarme el problema de que rompa
//por esto, una vez que deje todo funcionando voy a empezar a reveer el tema de apdre e hijos y evitar repetir codigo
/*function buscarProductoPago (id) {
    let productos = upProductosLocalS();
    return productos.find(i => i.id == id);
}*/
let finalPreFuera = "puto"
function buscarPago (precio) {
    let producto = precio;
    return producto;
}

function efectivo() {
    let listaPrecios = buscarPago();
    let precio = listaPrecios;
    let interes = 10;
    //alert ("El costo de su producto es $" + (precio - ((precio * interes) / 100)));
   // precioFinalInner.innerHTML = ("El costo de su producto es $" + (precio - ((precio * interes) / 100)));
   let finalPre = (precio - ((precio * interes) / 100));

    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
   return finalPre;
}
function debito() {
    let listaPrecios = buscarPago() ;
    let precio = listaPrecios;
    let interes = 0;
   // alert ("El costo de su producto es $" + (precio) + " ,recuerde nuestros descuentos abonando en efectivo!");
    //precioFinalInner.innerHTML = ("El costo de su producto es $" + (precio));
    let finalPre = precio;
    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
}

function credito() {
    let listaPrecios = buscarPago() ;
    let precio = listaPrecios;
    let interes = 1.15;
    let cuotas = parseInt( prompt ("Ingrese la cantidad de cuotas a calcular."));
    //alert ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    if (cuotas > 3) {
        alert ("El maximo de cuotas con tarjeta de credito es de 3");  
    }
    //precioFinalInner.innerHTML = ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    let finalPre = ((precio * interes) / cuotas);
    if (precio >1000) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
}

function mercadoPago() {
    let listaPrecios = buscarPago() ;
    let precio = listaPrecios;
    let interes = 1.1;
    let cuotas = parseInt( prompt ("Ingrese la cantidad de cuotas a calcular."));
    //alert ("El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas));
    if (cuotas > 12) {
        alert ("El maximo de cuotas con Mercado Pago es de 12")
    }
    //precioFinalInner.innerHTML =  "El costo de su producto es de " + cuotas + " cuotas de $" + ((precio * interes) / cuotas);
    let finalPre = ((precio * interes) / cuotas);
    if (precio >1200) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
}




const pagos = [
    {id:1 , tipo: "Efectivo" , idea: efectivo()},
    {id:2, tipo: "Debito" , idea: debito()},
    {id:3, tipo: "Credito" ,idea:  credito()},
    {id:4, tipo: "Mercado Pago" , idea:  mercadoPago()},
]
function tipoPagoLs (pagos) {
    localStorage.setItem("pagos" , JSON.stringify(pagos));

}
function upTipoPagoLs () {
    return JSON.parse(localStorage.getItem("pagos"))
}
function buscarPagos (id) {
    let productos = upTipoPagoLs();
    return productos.find(i => i.id == id);
}


//funciones para el calculador de costos del simulador
function generarListaPagos (){
    let pagoFuncion =  upTipoPagoLs ();
    let productoLista = "";
    for (const variable of pagoFuncion) {
        productoLista +=
        `<li><a class="dropdown-item" onclick="completarListaPagos(${variable.id});">${variable.tipo}</a></li>`
        }
        
let productoInner = document.getElementById("pagoIdLista");
productoInner.innerHTML= productoLista;
}
function completarListaPagos (id) {
    let pago =  buscarPagos (id);
    let funPag = pago;
   console.log (funPag.idea());
    precioFinalInner.innerHTML = `Precio final: ${funPag.finalPre}`;
}



generarListaPagos();






//tipoPagoLs(pagos);
//cuotasInner.innerHTML = 


