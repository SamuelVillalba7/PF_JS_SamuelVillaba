// Array que contiene el catálogo inicial de productos con nombre, precio y stock
let catalogo = [
    {Nombre: "monitor", Precio: 100, Stock: 10},
    {Nombre: "mouse", Precio: 20, Stock: 15},
    {Nombre: "teclado", Precio: 30, Stock: 6},
    {Nombre: "parlante", Precio: 25, Stock: 12},
    {Nombre: "laptop", Precio: 120, Stock: 2}
]
let catalogoAux = []


// Función para crear un nuevo producto y agregarlo al catálogo
const crearProducto = () => {
    
    let nombreProducto = prompt("Ingrese el nombre del producto")
    let precioProducto = parseInt(prompt("Ingrese el precio del producto"))
    let stockProducto = parseInt(prompt("Ingrese el stock del producto"))
    
    // Crea un objeto producto con los valores ingresados
    const producto = {
        Nombre: nombreProducto,
        Precio: precioProducto,
        Stock: stockProducto
    }

    // Agrega el nuevo producto al catálogo
    catalogo.push(producto)
}



// Función para mostrar el catálogo actual
const mostrarCatalogo = () => {
    let lista = "Catálogo: \n"

    // Recorre el catálogo y agrega los detalles de cada producto a la lista
    for (let x = 0; x < catalogo.length; x++) {
        lista += ` ${x+1}. ${catalogo[x].Nombre}   $${catalogo[x].Precio}   ${catalogo[x].Stock}\n`
    }
    return lista
}

// Función para gestionar la compra de productos
const comprar = () => {
    let flag = true
    let precioTotal = 0
    let carrito = "Carrito: \n"

    // Bucle que permite al usuario seguir comprando hasta que decida parar
    while (flag) {

        // Muestra el catálogo y solicita al usuario el índice del producto a comprar
        let indice = (prompt(mostrarCatalogo() + "Ingrese el índice del producto")) - 1        
        
        // Verifica si hay stock disponible del producto seleccionado
        if (catalogo[indice].Stock === 0) {
            alert("No hay stock")
            continue
        }
        
        // Reduce el stock del producto comprado
        catalogo[indice].Stock--

        // Agrega el producto al carrito y actualiza el precio total
        carrito += ` ${catalogo[indice].Nombre}  $${catalogo[indice].Precio}\n`
        precioTotal += catalogo[indice].Precio

        // Pregunta al usuario si desea seguir comprando
        flag = confirm("¿Desea seguir agregando productos al carrito?")
    }

    registrarCompra(carrito,precioTotal)

    // Muestra el carrito final y el precio total
    alert(carrito + "\n" + "Precio total: " + precioTotal)
}


let historialCompras = [];

const registrarCompra = (carrito, precioTotal) => {
    historialCompras.push({
        productos: carrito,
        total: precioTotal
    });
};

const verHistorial = () => {
    let historial = "Historial de Compras:\n \n";
    let cont=0
    for (let compra of historialCompras) {
        historial += `Compra : ${++cont}  \n${compra.productos}Total: $${compra.total}\n\n`;
    }
    alert(historial);
};




// Función principal de la aplicación
const app = () => {
    let flag = true

    // Bucle principal que permite al usuario interactuar con el catálogo
    while (flag) {
        // Solicita al usuario seleccionar una opción
        let opc = parseInt(prompt("Ingrese una opción: \n 1. Mostrar catálogo \n 2. Cargar producto \n 3. Comprar \n 4. Historial compras"))

        // Switch para ejecutar la opción seleccionada
        switch (opc) {
            case 1:
                alert(mostrarCatalogo()) // Muestra el catálogo
                break
            case 2:
                crearProducto() // Crea un nuevo producto
                mostrarCatalogo() // Muestra el catálogo actualizado
                break
            case 3:
                comprar() // Permite comprar productos
                break
            case 4:
                verHistorial() // Permite comprar productos
                break

        }

        // Pregunta si desea seguir utilizando la aplicación
        flag = confirm("¿Desea continuar?")
    }
}

// Llamada a la función principal para iniciar la aplicación
app()

