const lugarRetiro = [" Sucursal 1" , "Villa Pueyrredon" , "Cp. 1419"];

const productos = [
    {id:1 , nombre: "Casco", colorTalle: "blue" , marca: "Axxis" , modelo: "Roc" , codigo: 1401 , precio:25000 , retiro: lugarRetiro , imagen: "axxisRocBlue.jpg" },
    {id:2 , nombre: "Bateria", colorTalle: "Gel" , marca: "Yuasa" , modelo: "Yt7a" , codigo: 1290 , precio:7500 ,  retiro: lugarRetiro , imagen: "bateriaYt7a.jpg" },
    {id:3 , nombre: "Candado", colorTalle: "amarillo" , marca: "Xena" , modelo: "alarm 110" , codigo:1503 ,  retiro: lugarRetiro , precio:4350 , imagen: "candadoXena.jpg" },
    {id:4 , nombre: "Aceite", colorTalle: "1 litro" , marca: "Castrol" , modelo: "Power 1" , codigo:1104 , retiro: lugarRetiro , precio:1450 , imagen: "castrolPower.jpg" },
    {id:5 , nombre: "Aceite", colorTalle: "1 litro" , marca: "Motul" , modelo: "5100" , codigo:1107 , retiro: lugarRetiro , precio:1850 , imagen: "motul5100.jpg" },
    {id:6 , nombre: "Zapata de freno", colorTalle: "Std" , marca: "Frasle" , modelo: "807" , codigo:1812 , retiro: lugarRetiro , precio:1200 , imagen: "frasle807.jpg" },
    {id:7 , nombre: "Linga de seguridad", colorTalle: "XL" , marca: "Pmsecurity" , modelo: "m1.2" , codigo:1704 , retiro: lugarRetiro , precio:2750 , imagen: "pmSecurity.jpg" },
    {id:8 , nombre: "Kit transmision Honda Titan", colorTalle: "Zincado" , marca:"Tech" , modelo:"Titan New" , codigo:1606 , retiro: lugarRetiro , precio:3860 , imagen: "transTech.jpg" },
];


function productosLocalS  (productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function upProductosLocalS () {
    return JSON.parse(localStorage.getItem("productos"));
}



function generarArticulos (){
let productoFuncion = upProductosLocalS ();
let articuloMain = "";
for (const variable of productoFuncion) {
    articuloMain += `<div class="col-md-3"
        <div class="card" style="width: 18rem;">
            <img src="imagenes/${variable.imagen}" class="card-img-top"  alt="${variable.codigo} width="100px" height="200px" >
            <div class="card-body">
                <h5 class="card-title">${variable.nombre} marca ${variable.marca}</h5>
                <p class="card-text">${variable.nombre} ${variable.marca} ${variable.modelo} ${variable.colorTalle} codigo: ${variable.codigo} </p>
                <p class="card-text">Precio: <strong>$${variable.precio}</strong></p>
                <a href="#" class="btn btn-primary" onclick="agregarAlCarrito(${variable.id});">Agregar al carrito</a>
            </div>
        </div>
        </div>`
    }



let articulosInner = document.getElementById("articulos");
articulosInner.innerHTML= articuloMain;
}
productosLocalS(productos);
generarArticulos();
contadorCarrito();




//funciones para el simulador 
function generarListaProductos (){
    let productoFuncion = upProductosLocalS ();
    let productoLista = "";
    for (const variable of productoFuncion) {
        productoLista +=
        `<li><a class="dropdown-item" onclick="completarLista(${variable.id}); buscarPago(${variable.precio});">${variable.nombre}</a></li>`
        }
        
let productoInner = document.getElementById("productoIdLista");
productoInner.innerHTML= productoLista;
}
function buscarProductoSim (id) {
    let productos = upProductosLocalS();
    return productos.find(i => i.id == id);
}
function completarLista (id) {
    let producto =  buscarProductoSim (id);
    colorInner.innerHTML = "Color/Talle: " + producto.colorTalle;
    marcaInner.innerHTML = "Marca: " + producto.marca;
    codigoInner.innerHTML = "Codigo de producto: " + producto.codigo;
    retiroInner.innerHTML = "Lugar de retiro: " + producto.retiro;
}
/*function proPago (id) {
    let producto = upProductosLocalS();
    return productos.find(i => i.id == id);
}*/



generarListaProductos();
//buscarPago(${variable.precio})
//buscarPago(${variable.precio})