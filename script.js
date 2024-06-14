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

{
    id : 4,
    nombre: "Maravillas",
    precio: 17500,
    img:
        "https://img.remediosdigitales.com/017757/image/450_1000.jpeg"
},{
    id : 5,
    nombre: "Saudade",
    precio: 17500,
    img:
        "https://http2.mlstatic.com/D_NQ_NP_863421-MLU71096003034_082023-O.webp"
},{
    id : 6,
    nombre: "Wonderlust",
    precio: 17500,
    img:
        "https://images.cdn1.buscalibre.com/fit-in/360x360/73/4a/734a569dcc4f6b3a2d601a11bdc98437.jpg"
}

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
        const productoEnCarrito = CARRITO.find(item => item.id === libro.id);

    if (productoEnCarrito) {
        
        productoEnCarrito.cantidad += 1;
        productoEnCarrito.total = productoEnCarrito.cantidad * libro.precio; }
    
        else{
        CARRITO.push({
            id : libro.id,
            img : libro.img,
            nombre : libro.nombre,
            precio : libro.precio,
            cantidad: 1,
            total: libro.precio


        });}
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
            <h4> Cantidad:  ${libro.cantidad} </h4> 
            <h4> Total: $ ${libro.total} </h4>
        `;

    carritoContainer.append(contenidoCarrito)
    });

    const total = CARRITO.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);

    const totalCompra = document.createElement("div")

    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    carritoContainer.append(totalCompra);

    
    const CompraFinal = document.createElement("button")

    CompraFinal.className = "compra-final"
    CompraFinal.innerHTML = `Comprar`;
    carritoContainer.append(CompraFinal);


    CompraFinal.addEventListener("click", () => {
        if(CARRITO.length===0) {
            Swal.fire({
                title: "El carrito está vacío, volvé a intentarlo!",
                width: 600,
                padding: "3em",
                color: "#716add",
                backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://media.tenor.com/iyfN9RjdvR4AAAAM/panda-shy.gif")
                    left top
                    no-repeat
                `})
                carritoContainer.style.display = "none"; 
        }
        else {
        Swal.fire({
            title: "Compra realizada exitosamente!",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                rgba(0,0,123,0.4)
                url("https://media2.giphy.com/media/MeOwyNnXJqXGXfsZ4m/200.webp?cid=790b7611f7kq4vukf3m4hwswmhza9wnzu45flmsqd5rfltye&ep=v1_gifs_search&rid=200.webp&ct=g")
                left top
                no-repeat
            `
        }); CARRITO = []; 
        carritoContainer.style.display = "none"; 
    }

            })
        
        })