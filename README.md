# Farmacia Hernandez - ReactJs

Este proyecto fue realizado con el fin de aprender a utilizar ReactJs. Para poder utilizarlo se necesitan las siguientes herramientas:  

1. Se debe tener (Node.js)[https://nodejs.org/en/] instalado en el dispositivo.
2. Se requiere algun editor de código. Personalmente utilicé (Visual Studio Code)[https://code.visualstudio.com/].
3. Correr `npm init` para crear la carpeta del proyecto con todas las herramientas a utilizar.
4. Correr `npx create-react-app nombre-de-app`. 
5. Instalar las siguientes dependencias con `npm install`:
    - firebase
    - react-router-dom
6. Ahora desde el directorio de la app podemos correr la app utilizando el comando `npm start`.

## Environment

Antes de comenzar a utilizar el proyecto se debe hacer un servidor en (FireBase)[https://firebase.google.com/], y con los datos que firebase le dará, crear en el directorio base de la app un archivo .env que tenga el siguiente formato para poder acceder a los items que haya cargado en el.

    REACT_APP_apiKey=qwertyuiopasdfghjkl
    REACT_APP_authDomain=nombre-de-su-app.firebaseapp.com
    REACT_APP_projectId=nombre-de-su-app
    REACT_APP_storageBucket=nombre-de-su-app.appspot.com
    REACT_APP_messagingSenderId=123456789
    REACT_APP_appId=1:23456789:web:1a2s3d4f5g6h7j8k9l0

### Organización de componentes

En el proyecto dividí los componentes en 3 tipos y según ello los dividi en sus respectivas carpetas:

- Presentación, los cuales se encargan principalmente de renderizar y tienen lógica casi nula.
- Contenedores, cuyo fin es procesar los datos para pasarselos a los de presentación.
- Contextos, que cumplen la función de almacenar datos para que el resto de componentes los consuman.
