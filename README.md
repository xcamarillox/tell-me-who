## Tell Me Who / Identificador de actores o actrices
- #### (scroll for the english version)
- #### Probado en Chrome

**Tell Me Who** es una aplicación que reconoce desde una archivo de imágen (jpg o png) al actor o actriz seleccionad@. Presenta una interfaz intuitiva y minimalista para cumplir este objetivo. No solo reconoce al artista, si no que además nos despliega los trabajos en los que se ha involucrado, además de su información general.

Se utilizan herramientas como **Parcel** (en desarrollo) para "empaquetar" el código y facilitar su implementación en producción. **React** es el eje central del proyecto, framework utilizado para manipular elementos DOM, además de manejar las interacciones del usuario. Se adjuntan dos librerías muy ligadas y complementarias a React, como lo son **React Router** y **Redux** como administrador de rutas y administrador de estado de la App respectivamente. **Ant Design** también se incluye en el proyecto, sacando provecho de sus componentes gráficos muy versátiles además de estilos CSS predefinidos. El resultado del desarrollo de la aplicación es una Single Page Application (SPA), que brinda una experiencia muy fluida al usuario del sitio. 

En el Backend se utiliza los servicios del API de **The Movie Database (TMDB)**, ya que nos proporciona extensa información cinematográfica, además del API privado de **Nomada Cloud** el cual nos auxilia a reconocer desde una archivo de imágen al actor o actriz seleccionad@.

### Pasos para su puesta en marcha de forma local

 - En consola ejecuta: **git clone [https://github.com/xcamarillox/tell-me-who](https://github.com/xcamarillox/tell-me-who)** o bien puedes acceder a [https://github.com/xcamarillox/tell-me-who](https://github.com/xcamarillox/tell-me-who). En el apartado de code, seleccionar download ZIP. Esto ultimo si no te interesa el historial de commits o la data de GIT.
 - Coloca el archivo **.env** en el directorio raíz del proyecto (en el mismo lugar está el package.json). Este archivo protege las claves privadas y se te proporciona de antemano (no se incluye al proyecto de GIT/GITHUB por ese motivo).
 - En consola dirigete al directorio raíz del proyecto y ejecuta **npm install**
 - En consola ejecuta: **npm start**.
 - Abre tu navegador y coloca **http://localhost:1234/** en la barra de dirección. Parcel genera esa dirección generalmente, si no funciona coloca la dirección que te menciona la terminal.
 - Listo, ahora puedes hacer pruebas del proyecto. 
 - Si se busca hacer deploy ejecutar **npm build**.
 

_________________


## Tell Me Who / Identifier of actors or actresses
- #### Tested in Chrome


**Tell Me Who** is an application that recognizes the selected actor or actress from an image file (jpg or png). It presents an intuitive and minimalist interface to fulfill this objective. Not only does it recognize the artist, but it also displays the works in which he has been involved, in addition to his general information.

Tools such as **Parcel** (in development) are used to "package" the code and make it easier to deploy to production. **React** is the central axis of the project, a framework used to manipulate DOM elements, in addition to handling user interactions. Two closely linked and complementary libraries are attached to React, such as **React Router** and **Redux** as route manager and App state manager respectively. **Ant Design** is also included in the project, taking advantage of its very versatile graphical components as well as predefined CSS styles. The result of the application development is a single page application (SPA), which provides a very smooth experience to the user of the site.

In the Backend, the API services of **The Movie Database (TMDB)** are used, since it provides us with extensive cinematographic information, in addition to the private API of **Nomada Cloud** which helps us to recognize from a movie file image to the selected actor or actress.

### Steps for its implementation locally

 - In console execute: **git clone [https://github.com/xcamarillox/tell-me-who](https://github.com/xcamarillox/tell-me-who)** or you can access [https://github.com/xcamarillox/tell-me-who](https://github.com/xcamarillox/tell-me-who). In the code section, select download ZIP. The latter if you are not interested in commit history or GIT data.
 - Place the **.env** file in the root directory of the project (in the same place is the package.json). This file protects the private keys and is provided to you in advance (it is not included in the GIT/GITHUB project for that reason).
 - In console go to the root directory of the project and run **npm install**
 - In console execute: **npm start**.
 - Open your browser and put **http://localhost:1234/** in the address bar. Parcel generally generates that address, if it doesn't work, put the address that the terminal mentions.
 - Ready, you can now test the project.
 - If you want to deploy run **npm build**.