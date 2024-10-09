# ELDAR CHALLENGE

## Descripción

Aplicación web con autenticación y manejo de roles.
La aplicación cuenta con dos usuarios, con roles predefinidos, en donde el rol "user" solo tiene acceso de lectura a
los datos obtenidos de la API, mientras que el rol "admin" puede crear y editar datos.

## Estructura

La arquitectura del proyecto se basa en una arquitectura en capas, donde las capas son una separación arbitraria donde separamos nuestros componentes en grupos basados en su tipo.

Para el manejo de las tecnologías, se utilizó Vite como empaquetador del proyecto, React, Typescript, Redux para el manejo de estado, Axios y Tanstack/React-Query para fetchear y cachear la data, y MaterialUI para los componentes visuales.

## Instalación

- Clonar el repositorio desde el siguiente [link](https://github.com/FerDR89/eldar-challenge)
- En la raíz del directorio ejecutar el siguiente comando:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto de manera local, en ambiente dev, es necesario ejecutar en la raíz del directorio el siguiente comando:

```bash
npm run dev
```

## API

En el siguiente enlace podrás encontrar la documentación de la API utilizada: [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/)

## DISCLAIMER

(\*) Error en la consola con el input text area -> [Mui textarea id error](https://github.com/mui/material-ui/issues/38869)

(\*\*) Al crear dos post de manera consecutiva la consola de la web mostrará que hay un error ya que se encuentran dos elementos de una lista con la misma key. Esto se debe a que la API de JSONplaceholder al crear un recurso devuelve siempre el mismo recurso con el mismo ID. Dicho ID es el que se toma para crear el post en el estado local, en un ambiente productivo los mismos deberían de ser unicos y evitar así dicho conflicto.
