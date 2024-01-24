const bodega = [
    {id: 1, nombre: "papas fritas", precio: 2590, cantidad: 4, imagen: },
    {id: 2, nombre: "arroz", precio: 980, cantidad: 3, imagen:  },
    {id: 3, nombre: "fideos", precio: 540, cantidad: 6, imagen: }
    {id: 4, nombre: "leche", precio: 1200, cantidad: 2, imagen: },
    {id: 5, nombre: "sopas", precio: 180, cantidad: 5, imagen:  },
    {id: 6, nombre: "lentejas", precio: 2200, cantidad: 2, imagen: },
    {id: 7, nombre: "conservas", precio: 1100, cantidad: 4, imagen: },
];

localStorage.getItem("bodega", JSON.stringify(bodega));

const agregoABodega = (nombre, precio, cantidad) => {
  let productosJSON = localStorage.getItem("bodega");
  let productos = JSON.parse(productosJSON);

  let miNuevoProducto = {
      id: bodega.length + 1,
      nombre,
      precio,
      cantidad,
  };

  productos.push(miNuevoProducto);

   localStorage.setItem("bodega", JSON.stringify(bodega));
 };

let lista = document.getElementById("guardar");
lista.addEventListener("submit", (e)) => {
e.preventDefault();
}