# React_Cult

## Tabla de Contenidos

- [Informacion General](#informacion-general)
- [Cursos Recomendados](#cursos-recomendados)
- [Herramientas Necesarias y Recomendadas](#Herramientas-Necesarias-y-Recomendadas)
- [Ejemplos](#ejemplos)
- [¿Que es React?](#¿Que-es-React?)
- [Crear una aplicacion con Create-react-app](#Crear-una-aplicacion-con-Create-react-app)
- [Inspiration](#inspiration)
- [Contact](#contact)

## Informacion General

Este repositorio es mi propia colección de información de React con tres simples propósitos:

- Compartirlo con la comunidad
- Tener una referencia funcional y en español
- Aprender React

## Cursos Recomendados

La información presente ha sido recolectada de múltiples sitios pero aun así hay ciertos cursos o tutoriales que han inspirado mayoritariamente este trabajo por lo que me gustaría dar una mención antes de iniciar.

- [React - La Guía Completa: Hooks Context Redux MERN +15 Apps](https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/)
- [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Herramientas Necesarias y Recomendadas

Las herramientas para poder desarrollar en angular son las siguientes:

- [Node.js](https://nodejs.org/es/)
- [Visual Studio Code](https://code.visualstudio.com/)

## Ejemplos

- [Comic App](https://musing-nobel-c899da.netlify.app)
- [SpotiApp](https://competent-pike-99c9dd.netlify.app/#/home)

Los ejemplos se encuentran dentro de este mismo repositorio y para iniciar cada uno solo hay que iniciar

## ¿Que es React?

React es una librería Javascript focalizada en el desarrollo de interfaces de usuario.

## Crear una aplicacion con Create-react-app

Create-react-app es una herramienta para crear proyectos con la estructura necesaria para hacer una aplicacion de pagina unica usando React.
Se utiliza ejecutando el siguiente comando en la terminal:

```node
npx create-react-app my-app
```

## Estructura de Create react app

La estructura basica de una aplicacion creada con create react app es la siguiente:

### Node Modules

En esta seccion estan todas las dependencias del poryecto como las herramientas necesarias para iniciar el proyecto en modo desarrrollo y relacionadas a esta clase

### Public

En esta carpeta se encuentra el archivo index.html con uns estrcutura similar a esta:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>Basicos React</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Este archivo es el que muestra el navegador, en la etiqueta

```html
<div id="root"></div>
```

es donde se inyecta todo el codigo de react.
Aparte de esto en la carpta public se puede poner imagenes y hojas de estilo

### src

En esta carpeta es en donde se trabajara mayoritariamente desarrollando para React.
Los archivos principales son:

#### index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

En esta archivo es donde se usa la libreria react y se renderiza el componente App que se mostrara a continuacion

#### App.js

```javascript
import React, { Fragment, useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Hola desde React</h1>
    </div>
  );
}

export default App;
```

Este es un ejemplo de componente y es el componente principal para cargar otros componentes

## Basicos

En esta seccion se trabajara conceptos basicos para react

### Crear un componente

Para crear un componente se crea un archivo .js o .jsx dentro de la carpeta src, usualmente se crean carpetas para dividir los componentes.La filosofia de react es dividir lo mayor posible la pagina en componentes.
La estructura de cualquier componente es la siguiente:

```javascript
import React from "react";
function Header() {
  return <h1 className="encabezado">} Hola</h1>;
}
export default Header;
```

El nombre del archivo es el nombre del componente y tiene que estar en mayuscula y sin espacio,se importa React ya que esta es la libreria que se encarga de la mayoria de las funcionalidades.Previamente se creaban con clases pero ahora son funciones, como se puede observar en el codigo anterior, el nombre de la funcion es el nombre del componente en el ejemplo anterior se llamada Header por lo que el componente creado se llamara Header.Dentro del return se coloca todo lo que vera en pantalla y por ultimo se exporta la funcion.

Una vez creado el componente se puede utilizar en otro componente de la siguiente manera:

```javascript
import Header from "./components/Header";
```

En este caso se importara el componente previamente creado y este se encuetra dentro de una carpeta components.Una vez ya importado el componente se puede utilzar el componente como si fuera un nuevo elemento de html

```javascript
import React, { Fragment, useState } from "react";
import Header from "./components/Header";

function App() {
  return <Header />;
}

export default App;
```

La etiqueta Header mostrara todo lo que este en el return del componente Header.
