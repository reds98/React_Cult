import React,{Fragment,useState} from 'react';
import  Header  from "./components/Header";
import  Footer  from "./components/Footer";
import  Producto  from "./components/Producto";
import  Carrito  from "./components/Carrito";

function App() {
  const [productos,guardarProductos]= useState([
    {id:1,nombre:"CamisetaReact",precio:50},
    {id:2,nombre:"CamisetaNode",precio:50},
    {id:3,nombre:"CamisetaVue",precio:50},
    {id:4,nombre:"CamisetaAngular",precio:50},
  ]);
  const [carrito,agregarProducto]=useState([])
  //Obtener la fecha
  const fecha= new Date().getFullYear()

  
  return (
    <Fragment>
      <Header
      titulo="Tienda Virtual"/>
      <h1>Listado de productos</h1>
      {productos.map(producto=>(
        <Producto
        key={producto.id}
        producto={producto}
        carrito={carrito}
        agregarProducto={agregarProducto}
        productos={productos}/>
      ))}
      <Carrito 
      carrito={carrito}
      agregarProducto={agregarProducto}
      />
      <Footer
      fecha={fecha}/>
    </Fragment>
  );
}

export default App;
