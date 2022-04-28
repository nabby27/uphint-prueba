# Prueba Uphint

Encontraras varias carpetas dentro de este proyecto, la de assets donde deberas introducir todas las imagenes que uses y la de pages donde se encuentran los diversos elementos sobre los que deberas construir tu solucion.

## Estructura de pages

En la carpeta encontraras 4 subcarpetas:
- Background: Es un script que esta en continua ejecuccion en el navegador.
- Content: Es un script que se inyecta en todas las pestañas (una vez hayas instalados la extension deberas refrescar todas las pestañas cada vez que hagas cambios)
- Options: Es una vista a la que puedes acceder desde: chrome-extension://<ID_Extension>/options.html
- Popup: Es la ventana emergente que se abre al hacer click en el icono de la extension

## Objetivo

Uphint es una startup que crea guias a partir de las acciones de los usuarios a traves de una extension.
El objetivo de esta prueba es:
1. Crear una ventana modal en la vista de Popup donde el usuario pueda iniciar la captura de eventos de forma manual.
2. Capturar los eventos de click que realice el usuario y el texto del elemento al que ha hecho click (solo cuando haya activado la captura el usuario).
3. Persistir estos datos para su posterior visualizacion (vale con guardarla en localStorage).
4. Mostrar los datos de una forma estetica en la vista de Options.
