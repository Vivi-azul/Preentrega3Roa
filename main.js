const bodega = [
  { id: 1, nombre: "papas fritas", precio: 2590, cantidad: 4, imagen: "https://e7.pngegg.com/pngimages/823/670/png-clipart-potato-chip-matutano-vegetarian-cuisine-cheetos-potato-food-convenience-food.png"},
  { id: 2, nombre: "arroz", precio: 980, cantidad: 3, imagen: "https://dojiw2m9tvv09.cloudfront.net/58394/product/2-5-copy4838.png" },
  { id: 3, nombre: "fideos", precio: 540, cantidad: 6, imagen: "https://www.sm24.cl/web/image/product.template/1830/image_1024?unique=01dbf51" },
  { id: 4, nombre: "leche", precio: 1200, cantidad: 2, imagen: "https://masterofficechile.cl/wp-content/uploads/2022/04/909.jpg" },
  { id: 5, nombre: "sopas", precio: 180, cantidad: 5, imagen: "https://www.alimentosmj.cl/126-large_default/sopa-carne-con-semola-maggi-68-g.jpg" },
  { id: 6, nombre: "lentejas", precio: 2200, cantidad: 2, imagen: "https://cugat.cl/wp-content/uploads/2021/09/7804608220128.png" },
  { id: 7, nombre: "conservas", precio: 1100, cantidad: 4, imagen: "https://santaisabel.vtexassets.com/arquivos/ids/197665/Durazno-en-cubitos-caja-abre-facil-200-g.jpg?v=637891751893270000" },
];

let listado = document.getElementById("listaProductos");

bodega.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h3>Id: ${producto.id}</h3>
    <b>Nombre: ${producto.nombre}</b>
    <p>Precio: $${producto.precio}</p>
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}">
  `;
  listaProductos.append(div);
});
  

localStorage.setItem("bodega", JSON.stringify(bodega));


const agregoABodega = (nombre, precio, cantidad) => {
    let productosJSON = localStorage.getItem("bodega");
    let productos = JSON.parse(productosJSON);
    console.log(productos);

    let miNuevoProducto = {
      id: bodega.length + 1,
      nombre,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad),
    };

    productos.push(miNuevoProducto);

    localStorage.setItem("bodega", JSON.stringify());
  };

  let lista = document.getElementById("guardar");
  lista.addEventListener("submit", (e) => {
    e.preventDefault();
    agregoABodega(lista.nombre.value, lista.precio.value, lista.cantidad.value);

  });
