function buscarProducto (id) {
    let productos = upProductosLocalS();
    return productos.find(i => i.id == id);
}

function cargarProductosCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));;
    
    }

    return [];
}

function agregarAlCarrito (id) {
    let producto = buscarProducto(id);
    let productosCarrito = cargarProductosCarrito();
    productosCarrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    contadorCarrito();
}

function eliminarCarrito () {
    localStorage.removeItem("carrito")
    contadorCarrito();
}

document.getElementById("vaciarCarrito").addEventListener("click" , eliminarCarrito)

function contadorCarrito () {
    let productosCarrito = cargarProductosCarrito();
    let botonCarrito = `<button type="button" class="btn text-light bg-dark position-relative ">
    Carrito
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    ${productosCarrito.length}
    <span class="visually-hidden">unread messages</span>
    </span>
    </button>`;
    document.getElementById("botonCarrito").innerHTML = botonCarrito;
}

/*function productosSeleccionados () {
    let productoFuncion = cargarProductosCarrito ();
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
}*/