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
    cargarProductosCarrito();
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

function productosSeleccionados () {
    let productoFuncion = cargarProductosCarrito ();
    let carritoProductos = document.getElementById("carritoProductos");
    let total = 0 ;
    let contenido = `<table class="table table-hover">
    <tr>
    <th>Articulo</th>
    <th>Precio</th>
    </tr>`;
for (const variable of productoFuncion) {
    contenido += `<tr>
    <td>--${variable.nombre}</td>
    <td>$${variable.precio}</td>
    <td><button class='btn btn-danger'  onclick="eliminarElementoCarrito(${variable.id}) "> X </button></td>
    </tr>`;
    total += variable.precio;
    }

contenido += `<tr>
<td>--Precio Total</>
<td>$${total}</td>
<td>-</td>
</tr>
</table>`;
carritoProductos.innerHTML = contenido;
}

productosSeleccionados();

function eliminarElementoCarrito (id) {
    let producto = cargarProductosCarrito();
    let productosCarrito = producto.filter (x => x.id != id);
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    contadorCarrito();
    productosSeleccionados();
}