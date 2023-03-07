# LiteFlix - by AgDelfino

Este proyecto consta de un template para una plataforma de películas online 100% responsive. 
El mismo consume información de una API externa para renderizar de forma aleatoria las películas mejor puntuadas y a su vez muestra las 4 películas más populares.

La idea del proyecto consiste en evaluar las habilidades técnicas en cuanto a composición y desarrollo front-end (prueba-técnica)

- Su funcionalidad principal es la de poder agregar películas a tu localStorage, ingresando una imagen y un título.
- Previendo la preservación de la memoria del localStorage, se utilizó un server externo para el almacenamiento de las imágenes previo a su carga.  
- Dichas películas agregadas pueden visualizarse desde la opción mis películas.

-----------------------------------------------------------------------------------
# Stack de tecnologías: 
React - Tailwind - Framer Motion

# Builder: 
Vite

# Librerías adicionales: 
React-Icons / TailwindScrollbar / React-Drag-Drop-Files
-----------------------------------------------------------------------------------
# Inicializando el proyecto de forma local: 

Para poder inicializar el proyecto de forma local hay que seguir los siguientes pasos.
Una vez clonado el repositorio: 
* Ingresar a https://uploadcare.com/ y registrarse de forma gratuita con Google o GitHub.

![image](https://user-images.githubusercontent.com/103057289/223431650-d7254d3d-188a-44f9-baa7-3dfb8fb52839.png)
------------------------------------------------------------------------------------

* Una vez logueado, acceder a la sección API-KEYS

![image](https://user-images.githubusercontent.com/103057289/223432153-e9a57650-24b0-423a-8ef0-11eec7ae5315.png)

* Crear un archivo .env con la siguiente variable de entorno VITE_UPLOAD_API_KEY = "Api key de tu cuenta"

![image](https://user-images.githubusercontent.com/103057289/223432695-6ba214e9-3831-4c58-81de-590caf341ae1.png)

-----------------------------------------------------------------------------------

El proyecto final se encuentra deployado en Vercel : https://liteflix-agdelfino.vercel.app/
