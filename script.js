const tiendaContenido = document.getElementById("contenidoTienda")

const verCarrito = document.getElementById("ver-carrito");


const carritoContainer = document.getElementById("headerTotal")

const LIBROS = [
{
    id : 1,
    nombre: "Fuera del mapa",
    precio: 10500,
    img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcrEvZCK0GfUHF8FlYeBSzcI2UwqufVy1zHFmOiywYaA&s"
},
{
    id : 2,
    nombre: "Salvaje",
    precio: 15000,
    img:
        "https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2016/03/23111013/9788499185750.jpg"
},

];


let CARRITO = [];

LIBROS.forEach((libro)=> {
    let contenido = document.createElement("div");
    contenido.className= "card";
    contenido.innerHTML = `
    <img src="${libro.img}">
    <h3>${libro.nombre}</h3>
    <p class="precio">$ ${libro.precio}</p>
    `;
    
    tiendaContenido.append(contenido);

    let botonComprar = document.createElement("button")
    botonComprar.innerText = "Comprar";
    botonComprar.className = ("botonComprar");
    contenido.append(botonComprar);
    

    botonComprar.addEventListener("click", () => {
        CARRITO.push({
            id : libro.id,
            img : libro.img,
            nombre : libro.nombre,
            precio : libro.precio,

        });
    });
});

verCarrito.addEventListener("click", () => {
    carritoContainer.innerHTML = ""
    carritoContainer.style.display = "flex";

    const headerTotal = document.createElement("div");
    headerTotal.className = "header1"

    headerTotal.innerHTML = `
        <h1 class="tituloheader"> CARRITO </h1>
    `;
    carritoContainer.append(headerTotal);

    const salir = document.createElement("h1");
    salir.innerText = "X"

    salir.className = "boton-salir";

    salir.addEventListener("click", () => {
        carritoContainer.style.display = "none";
    })

    headerTotal.append(salir);

    CARRITO.forEach((libro) => {


        let contenidoCarrito = document.createElement("div")

        contenidoCarrito.className = "contenido-carrito"
        contenidoCarrito.innerHTML = `
            <img src = "${libro.img}">
            <h3>${libro.nombre}</h3>
            <p> $ ${libro.precio} </p>
        `;

    carritoContainer.append(contenidoCarrito)
    });

    const total = CARRITO.reduce((acumulador, producto) => acumulador + producto.precio,0);

    const totalCompra = document.createElement("div")

    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    carritoContainer.append(totalCompra)
})