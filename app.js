const catalogo = [
    {Id:1, Nombre: "monitor",Tipo: "monitor", Precio: 100, Stock: 10,Imagen:"https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/m/k/mk24x7100__iafbso0001_1200x922.jpg"},
    {Id:2, Nombre: "mouse",Tipo:"mouse" , Precio: 20, Stock: 15,Imagen:"data:image/jpeg;base64,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"},
    {Id:3, Nombre: "teclado",Tipo:"teclado" , Precio: 30, Stock: 6,Imagen:"https://spacegamer.com.ar/img/Public/1058-producto-teclado-mecanico-inalambrico-redragon-draconic-white-6359.jpg"},
    {Id:4, Nombre: "parlante",Tipo: "parlante" , Precio: 25, Stock: 12,Imagen:"https://http2.mlstatic.com/D_NQ_NP_988435-MLA41011746105_032020-O.webp"},
    {Id:5, Nombre: "laptop",Tipo: "laptop" , Precio: 120, Stock: 0,Imagen:"https://i5.walmartimages.com/seo/Lenovo-Ideapad-5-14-1080p-Touchscreen-Laptop-AMD-Ryzen-7-5700U-8GB-RAM-512GB-SSD-Windows-11Home-Graphite-Grey-82LM00UEUS_bd7e44d5-ecc2-492a-9fe7-56c8599372bd.31d4c74bec047ea8f7dd7939c4e7801b.jpeg"}
]

const carrito = []
const lista = document.getElementById("lista")
const table=document.getElementById("table")


function inicializarCatalogo(){

    let array= JSON.parse(localStorage.getItem("catalogo")) || []
    if(array.length===0){
        array = JSON.stringify(catalogo)
        localStorage.setItem("catalogo",array)
    }
   
}


function obtenerCatalogo(){
   
    const array= JSON.parse(localStorage.getItem("catalogo"))
    return array
}


function cargarProducto(producto){
    let array=obtenerCatalogo()
    array.push(producto)
    array = JSON.stringify(array)
    localStorage.setItem("catalogo",array)
}


function ordenarLista() {
    const listaOrdenada = [];

    carrito.forEach(producto => {
        // Busca si el producto ya existe en la listaOrdenada
        let productoExistente = listaOrdenada.find(p => p.id === producto.Id);

        if (productoExistente) {
            // Si el producto ya existe, incrementa las unidades y actualiza el total
            productoExistente.Unidades += 1;
            productoExistente.Total += producto.Precio;
        } else {
            // Si el producto no existe, crea un nuevo objeto con Unidades = 1 y Total igual al precio del producto
            listaOrdenada.push({
                id: producto.Id,
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
    const list = ordenarLista(); // Asegúrate de pasar la lista 'listita' a 'ordenarLista'
    
    list.forEach(p => {

        text +=`
            <tr>
                <td>${p.Nombre}</td>
                <td>${p.Precio}</td>
                <td>${p.Unidades}</td>
                <td>${p.Total}</td>
            </tr>
        `



        // text += `
        //     <p>${p.Nombre}  ${p.Precio}   Unidades: ${p.Unidades}  Total: ${p.Total}</p>
        // `;
    });
    //lista.innerHTML = text; // Asegúrate de que 'lista' esté correctamente definido
    table.innerHTML=text;
    const acumulador = list.reduce((acum,p)=>{
        return acum+=p.Total
    },0)

    const total= document.getElementById("total")
    total.innerHTML=`
    <p>TOTAL : $ ${acumulador}</p>
    `

}



//nombre precio cantidad total




function listarProductos(){

    let productosHTML = '';
    const productosDOM = document.getElementById("productos") 
    productosDOM.innerHTML=""; 
    const array= obtenerCatalogo();
    
    array.forEach(p => {
    
        if(p.Stock===0){
            productosHTML += `
            <div class="producto">
                <div class="img">
                    <img src="${p.Imagen}" alt="">
                     <img class="sinStock" src="https://prueba.iac.com.co/demo_muebles/images/agotado.png" alt="">
                </div>
                <div class="producto-text">
                    <p class="nombre">${p.Nombre}</p>
                    <p class="precio">$${p.Precio}</p>
    
                </div>
                <button id="comprar" class="btn salchicha">Agregar</button>
            </div>
        `;
    
        }else{
            productosHTML += `
            
                <div class="producto">
                    <div class="img">
                        <img src="${p.Imagen}" alt="">
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




function visibleUsuario(flag){
    const c = document.getElementById("Usuario-Container")
   
    if(flag){
         c.style.visibility = "visible"
    }else{
        c.style.visibility = "hidden"
    }
   
}


function visibleCarrito(flag){
    const c = document.getElementById("carrito")
   
    if(flag){
         c.style.visibility = "visible"
    }else{
        c.style.visibility = "hidden"
    }
   
}
function visibleCargarProducto(flag){
    const c = document.getElementById("cargarProducto")
   
    if(flag){
         c.style.visibility = "visible"
    }else{
        c.style.visibility = "hidden"
    }
   
}

function visibleFinalizarCompra(flag){
    const c = document.getElementById("finalizarCompra")
   
    if(flag){
         c.style.visibility = "visible"
    }else{
        c.style.visibility = "hidden"
    }
   
}



btnFinalizarCompra= document.getElementById("btnFinalizarCompra")
btnFinalizarCompra.addEventListener("click",()=>{
    div=document.getElementById("finalizarCompra")
    div.innerHTML=`
    <p>Muchas gracias por su compra, los esperamos pronto</p>
    `
    lista.innerHTML=``
    carrito.length=0
    visibleCarrito(false)
    visibleFinalizarCompra(true)
})

btnCargarProducto= document.getElementById("btnCargarProducto")
btnCargarProducto.addEventListener("click",()=>{
    visibleCargarProducto(true)
})




btnMostrarCarrito= document.getElementById("btnMostrarCarrito")
btnMostrarCarrito.addEventListener("click",()=>{
    visibleCarrito(true)
})






function botonEventos(){
    
const botones = document.querySelectorAll(".btn")
    array= obtenerCatalogo()
botones.forEach( (btn,index) => {
    btn.addEventListener("click",(e)=>{
        const producto = array[index]; // Asumimos que los botones están en el mismo orden que los productos
        if (producto.Stock > 0) {
            producto.Stock--;
            localStorage.setItem("catalogo",JSON.stringify(array))
            console.log(`Stock restante de ${producto.Nombre}: ${producto.Stock}`);
            carrito.push(producto)
            actualizarLista()
            visibleUsuario(false)
            visibleFinalizarCompra(false)
            
        }  
        if(producto.Stock===0){

            console.log(`${producto.Nombre} está agotado.`);
            listarProductos()
        }

       
    })


});


const btnComprar= document.getElementById("btnComprar")

btnComprar.addEventListener("click",(e)=>{

    lista.innerHTML=``
    carrito.length=0
     visibleUsuario(true)   

})

}

function validarProducto(p) {
    if (isNaN(p.Precio) || p.Precio <= 0) {
        return false;
    }
    if (isNaN(p.Stock) || p.Stock <= 0) {
        return false;
    }
    return true;
}



function crearProducto() {
    let cantidad = catalogo.length;
    let id = cantidad + 1;
    let nombre = document.getElementById("txtNombre").value.trim();
    let tipo = document.getElementById("txtTipo").value.trim();
    let precio = Number(document.getElementById("txtPrecio").value); 
    let stock = Number(document.getElementById("txtStock").value); 
    let img = document.getElementById("txtImagen").value;

    const producto = {
        Id: id,
        Nombre: nombre,
        Tipo:tipo,
        Precio: precio,
        Stock: stock,
        Imagen: img
    };

    if (validarProducto(producto)) {
        cargarProducto(producto);
        listarProductos();
    } else {
        alert("Por favor, ingresa un precio y stock válidos mayores a 0.");
    }

    visibleCargarProducto(false)
}

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", crearProducto);




class Usuario{
    constructor(Nombre,Email,Telefono){
        this.Nombre=Nombre
        this.Email=Email
        this.Telefono=Telefono
    }
}
const btn= document.getElementById("btnFinalizarCompra")


let usuarios=[]

btn.addEventListener("click",()=>{
    usuarios= JSON.parse(localStorage.getItem("Usuarios")) || []

    const nombre= document.getElementById("txtNombreUsuario").value
    const email= document.getElementById("txtEmail").value
    const telefono= document.getElementById("txtTelefono").value

    usuarios.push(new Usuario(nombre,email,telefono))
    
    console.table(usuarios)
    localStorage.setItem("Usuarios",JSON.stringify(usuarios))

})

function app(){
    inicializarCatalogo();
    listarProductos()
}
app()

