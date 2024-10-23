// ==============================
// VARIABLES GLOBALES
// ==============================
let carrito = [];
const lista = document.getElementById("lista");
const table = document.getElementById("table");
const catalogo = [];
let usuarios = [];

// ==============================
// CLASES
// ==============================
class Producto {
    constructor(Id, Nombre, Tipo, Precio, Stock, Imagen) {
        this.Id = Id;
        this.Nombre = Nombre;
        this.Tipo = Tipo;
        this.Precio = Precio;
        this.Stock = Stock;
        this.Imagen = Imagen;
    }
}

class Usuario {
    constructor(Nombre, Email, Telefono) {
        this.Nombre = Nombre;
        this.Email = Email;
        this.Telefono = Telefono;
    }
}

// ==============================
// VALIDACIONES
// ==============================

function validarProducto(p) {

    if (isNaN(p.Precio) || p.Precio <= 0) {
        return false;
    }
    if(!p.Nombre || p.Nombre.trim() === ""){
        return false
    }
    if(!p.Tipo || p.Tipo.trim() === ""){
        return false
    }
    if (isNaN(p.Precio) || p.Precio <= 0) {
        return false;
    }
    if (isNaN(p.Stock) || p.Stock <= 0) {
        return false;
    }
    if(!p.Imagen || p.Imagen.trim() === ""){
        return false
    }
    return true;
}

function validarUsuario(aux){



    if(!aux.Nombre || aux.Nombre.trim() === ""){
        return false
    }
    if(!aux.Email || aux.Email.trim() === ""){
        return false
    }
    if(!aux.Telefono || aux.Telefono.trim() === ""){
        return false
    }
    return true
}





// ==============================
// FUNCIONES RELACIONADAS CON EL CATÁLOGO
// ==============================

async function cargarCatalogoJson() {
    const url = "catalogo.json"
    try {
        const datos = await fetch(url)
        const datosJSON = await datos.json()
        datosJSON.forEach(e => catalogo.push(e))
        console.table(catalogo)

    } catch (error) {
        console.log(error)
    }


}

async function inicializarCatalogo() {

    let array = JSON.parse(localStorage.getItem("catalogo")) || []
    if (array.length === 0) {
        await cargarCatalogoJson()
        array = JSON.stringify(catalogo)
        localStorage.setItem("catalogo", array)

    } else {
        catalogo.push(...array)

    }

}


function obtenerCatalogo() {

    const array = JSON.parse(localStorage.getItem("catalogo"))
    return array
}


function cargarProducto(producto) {
    let array = obtenerCatalogo()
    array.push(producto)
    array = JSON.stringify(array)
    localStorage.setItem("catalogo", array)
}

function crearProducto() {
    let cantidad = catalogo.length;
    let id = cantidad + 1;
    let nombre = document.getElementById("txtNombre").value.trim();
    let tipo = document.getElementById("txtTipo").value.trim();
    let precio = Number(document.getElementById("txtPrecio").value);
    let stock = Number(document.getElementById("txtStock").value);
    let img = document.getElementById("txtImagen").value;

    let producto = new Producto(id, nombre, tipo, precio, stock, img)

    if (validarProducto(producto)) {
        cargarProducto(producto);
        listarProductos();
        Swal.fire({
            icon: "success",
            title: "Producto agregado correctamente",
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese atributos validos porfavor",
        });
    }

    visible("cargarProducto")
}








// ==============================
// FUNCIONES PARA MANEJAR EL CARRITO Y LA LISTA
// ==============================

function ordenarLista() {
    const listaOrdenada = [];

    carrito.forEach(producto => {
        // Busca si el producto ya existe en la listaOrdenada
        let productoExistente = listaOrdenada.find(p => p.Id === producto.Id);

        if (productoExistente) {
            // Si el producto ya existe, incrementa las unidades y actualiza el total
            productoExistente.Unidades += 1;
            productoExistente.Total += producto.Precio;
        } else {
            // Si el producto no existe, crea un nuevo objeto con Unidades = 1 y Total igual al precio del producto
            listaOrdenada.push({
                Id: producto.Id,
                Nombre: producto.Nombre,
                Precio: producto.Precio,
                Unidades: 1,
                Total: producto.Precio
            });
        }
    });


    return listaOrdenada;
}


function actualizarLista() {
    let text = `
            <tr>
                <th>Productos</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th>Total</th>
            </tr>
    `;
    const list = ordenarLista();
 

    list.forEach(p => {

        text += `
            <tr>
                <td>${p.Nombre}</td>
                <td>${p.Precio}</td>
                <td>${p.Unidades}</td>
                <td>${p.Total}</td>
                <td><button class="eliminar">eliminar</button></td>
            </tr>
        `
       
       
    });

    

    table.innerHTML = text;
    const acumulador = list.reduce((acum, p) => {
        return acum += p.Total
    }, 0)

    const total = document.getElementById("total")
    total.innerHTML = `
    <p>TOTAL : $ ${acumulador}</p>
    `
    botonEliminar()  
}




function agregarUsuario(){
    usuarios = JSON.parse(localStorage.getItem("Usuarios")) || []
    const nombre = document.getElementById("txtNombreUsuario").value
    const email = document.getElementById("txtEmail").value
    const telefono = document.getElementById("txtTelefono").value

    let aux = new Usuario(nombre, email, telefono)

    if(validarUsuario(aux)){
        usuarios.push(aux)
        localStorage.setItem("Usuarios", JSON.stringify(usuarios))
        return true
    }else{
        return false
    }
}




// ==============================
// FUNCIONES DE VISUALIZACIÓN
// ==============================

function listarProductos(filtro = "todo") {
    let productosHTML = '';
    const productosDOM = document.getElementById("productos-container");
    productosDOM.innerHTML = "";
    const array = obtenerCatalogo();
    array.forEach(p => {
        if (filtro === "todo" || p.Tipo === filtro) {
            productosHTML += `
                <div class="producto">
                    <div class="img">
                        <img src="${p.Imagen}" alt="">
                        ${p.Stock === 0 ? '<img class="sinStock" src="https://prueba.iac.com.co/demo_muebles/images/agotado.png" alt="">' : ''}
                    </div>
                    <div class="producto-text">
                        <p class="nombre">${p.Nombre}</p>
                        <p class="precio">$${p.Precio}</p>
                    </div>
                    <button class="btn">Agregar</button>
                </div>  
            `;
        }
    });
    productosDOM.innerHTML = productosHTML;
    botonEventos();
}

function visible(id) {
    const x = document.getElementById(id);
    x.style.visibility = (x.style.visibility === "visible") ? "hidden" : "visible";
}

// ==============================
// FUNCIONES DE EVENTOS
// ==============================


function toastAgregar() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Agregado al carrito"
    });

}

function toastSinStock() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "warning",
        title: "Sin stock"
    });

}



// ==============================
// BOTONES
// ==============================


function botonEliminar() {
// }
    const eliminarDelCarrito = document.querySelectorAll(".eliminar");
    let carritoAux = ordenarLista();

    if (eliminarDelCarrito.length === 0) {
        return; // Si no hay productos, salir de la función
    }

   
    eliminarDelCarrito.forEach((b, index) => {
        b.addEventListener("click", () => {
            console.log("111")
            let idProducto = carritoAux[index].Id;
            carrito = carrito.filter(e => e.Id !== idProducto);
       
            actualizarLista(); 
        });
    });
}



const btnFinalizarCompra = document.getElementById("btnFinalizarCompra")
btnFinalizarCompra.addEventListener("click", () => {
    if(agregarUsuario()){
    lista.innerHTML = ``
    carrito.length = 0
    actualizarLista()
    visible("carrito")
    visible("usuario-container")

    Swal.fire({
        icon: "success",
        title: "Se realizo la compra",
    });

    }else{
        Swal.fire({
            icon: "warning",
            title: "El usuario no es valido",
        });
    }
    
    

})

const btnCargarProducto = document.getElementById("btnMostrarCargarProducto")
btnCargarProducto.addEventListener("click", () => {
    visible("cargarProducto")
})

const btnMostrarCarrito = document.getElementById("btnMostrarCarrito")
btnMostrarCarrito.addEventListener("click", () => {
    actualizarLista()
    visible("carrito")
})


function botonEventos() {

    const botones = document.querySelectorAll(".btn")
    array = obtenerCatalogo()
    botones.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            const producto = array[index]; // Asumimos que los botones están en el mismo orden que los productos
            if (producto.Stock > 0) {
                toastAgregar()
                producto.Stock--;
                localStorage.setItem("catalogo", JSON.stringify(array))
                carrito.push(producto)
                
                actualizarLista()
                    
                   


            } else if (producto.Stock === 0) {

                toastSinStock()
                listarProductos()
            }


        })


    });


    const btnComprar = document.getElementById("btnComprar")

    btnComprar.addEventListener("click", (e) => {
        if(carrito.length===0){
            Swal.fire({
                icon: "warning",
                title: "Se debe agregar un producto al carrito ",
            });

        }else{
            visible("usuario-container")
        }

    })

}


const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", crearProducto);


const opcionesFiltros = document.getElementsByClassName("filtroOpcion")
Array.from(opcionesFiltros).forEach(btn => {
    let categoria = btn.textContent
    btn.addEventListener("click", () => {
        listarProductos(categoria)

    })
})

const dropdown = document.getElementById("dropdown")
dropdown.addEventListener("click", () => {
    visible("filtros")
})





// ==============================
// FUNCIÓN PRINCIPAL DE INICIALIZACIÓN
// ==============================

async function app() {
    await inicializarCatalogo();
   
    listarProductos();
}
app()
































