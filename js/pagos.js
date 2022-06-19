
function cuotasLista (numeroCuota) {
    let cantidadCuota = numeroCuota;
    console.log ("la cantidad de cuotas para el pago seleccionadas fueron de: " + cantidadCuota);
    sessionStorage.setItem("cuotas", JSON.stringify(cantidadCuota));
    return cantidadCuota;
}

function cuotasQueVa() {
    return JSON.parse(sessionStorage.getItem("cuotas"));
}  

let finalPre = " "

function efectivo() {
    let listaPrecios = preProdSelect ;
    let precio = listaPrecios;
    let interes = 10;
    let calculoFinalPre = (precio - ((precio * interes) / 100));
    let finalPre = calculoFinalPre;
    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
   return finalPre;
}
function debito() {
    let listaPrecios = preProdSelect ;
    let precio = listaPrecios;
    let interes = 0;
    let calculoFinalPre = precio;
    let finalPre = calculoFinalPre;
    if (precio >500) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
}

function credito() {
    let listaPrecios = preProdSelect ;
    let precio = listaPrecios;
    let interes = 1.15;
    let cuotas = cuotasQueVa () ;
    cuotas > 3 && alert ("El maximo de cuotas con tarjeta de credito es de 3");
    let calculoFinalPre = ((precio * interes) / cuotas);
    let finalPre = calculoFinalPre;
    if (precio >1000) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
    
}

function mercadoPago() {
    let listaPrecios = preProdSelect ;
    let precio = listaPrecios;
    let interes = 1.1;
    let cuotas = cuotasQueVa () ;
    cuotas > 12 && alert ("El maximo de cuotas con Mercado Pago es de 12");
    let calculoFinalPre = ((precio * interes) / cuotas);
    let finalPre = calculoFinalPre;
    if (precio >1200) {
        let envioGratis = document.createElement("div");
        envioGratis.innerHTML = "<h3>Recuerda que tienes ENVIO GRATIS!!!</h3> <p>Envio sujeto a disponibilidad zonal.</p>";
        document.body.append(envioGratis);
    }
    return finalPre;
}


const pagos = [
    {id:1 , tipo: "Efectivo"},
    {id:2, tipo: "Debito"},
    {id:3, tipo: "Credito"},
    {id:4, tipo: "Mercado Pago"},
]

function tipoPagoLs (pagos) {
    localStorage.setItem("pagos" , JSON.stringify(pagos));
}
tipoPagoLs (pagos);
function upTipoPagoLs () {
    return JSON.parse(localStorage.getItem("pagos"))
}
upTipoPagoLs ();


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
function upValorDolarSs() {
    return JSON.parse(sessionStorage.getItem("dolarSimulador"));
} 
console.log (upValorDolarSs());
function completarListaPagos (id) {
    funPag = id;
    funPag === 1 && finalEfe ();
    funPag === 2 && finalDeb ();
    funPag === 3 && finalCre ();
    funPag === 4 && finalMer ();
}

function finalEfe () {
    console.log (efectivo())
    precioFinalInner.innerHTML = `Precio final: $${parseInt(efectivo())}, precio en usd ${parseInt(efectivo() / parseInt(upValorDolarSs()))}`;
}
function finalDeb () {
    console.log (debito());
    precioFinalInner.innerHTML = `Precio final: $${parseInt(debito())}, precio en usd ${parseInt(debito() / parseInt(upValorDolarSs()))}`;
}
function finalCre () {
    console.log (credito());
    precioFinalInner.innerHTML = `Precio final: $${parseInt(credito() * cuotasQueVa())} en ${cuotasQueVa()} cuotas de $${parseInt(credito())}, precio en usd${parseInt((credito() * cuotasQueVa()) / parseInt(upValorDolarSs()))}`;
}
function finalMer () {
    console.log (mercadoPago());
    precioFinalInner.innerHTML = `Precio final: $${parseInt(mercadoPago() * cuotasQueVa())} en ${cuotasQueVa()} cuotas de $${parseInt(mercadoPago())}, precio en usd${parseInt((mercadoPago() * cuotasQueVa()) / parseInt(upValorDolarSs()))}`;  
}
generarListaPagos();
console.log (cuotasQueVa());
console.log (preProdSelect);
