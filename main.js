const bodega = [
  { id: 1, nombre: "papas fritas", precio: 2590, cantidad: 4, imagen: "https://www.google.cl/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fes%2Fpng-xywxg&psig=AOvVaw1arxtRuWxOOFMufmbJQHyQ&ust=1706231607283000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKiws4iu94MDFQAAAAAdAAAAABAD" },
  { id: 2, nombre: "arroz", precio: 980, cantidad: 3, imagen: "https://www.google.cl/imgres?imgurl=http%3A%2F%2Fwww.distribuidorasantiago.cl%2Fwp-content%2Fuploads%2F2018%2F05%2FTucapel-Arroz.jpg&tbnid=AB_u0dKRz_TyqM&vet=12ahUKEwiW_sb7wPeDAxVCP7kGHYH7B4wQMygLegQIARBs..i&imgrefurl=https%3A%2F%2Fwww.distribuidorasantiago.cl%2Fproducto%2Ftucapel-arroz-grado-2-bolsa-1-kg-manga-10-unidades-cod-777%2F&docid=pDTxmEtd0mPNkM&w=1200&h=1200&q=paquete%20de%20arroz%20png%20200px&hl=es-419&ved=2ahUKEwiW_sb7wPeDAxVCP7kGHYH7B4wQMygLegQIARBs" },
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
  `;
});
  listado.append(div);

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
