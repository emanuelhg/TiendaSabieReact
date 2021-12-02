

# Tienda SaBie - Salud y Bienestar [![Netlify Status](https://api.netlify.com/api/v1/badges/eb49045d-c4d6-47a9-b3a2-129356a371bb/deploy-status)](https://pedantic-brattain-fa3d3b.netlify.app/)

**Proyecto:** Ecommerce.

**Curso:** React JS.

**Institución:** Coder House - Camada 16975.

**Año:** 2021.

**Autor:** Emanuel Guzzetti. 

**Contacto:** 

[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emanuel-guzzetti/) 

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ehguzzetti@gmail.com)
 	

# Introducción:

El presente proyecto ha sido realizado durante el curso de React JS de Coder House (Camada 16975). Tienda SaBie es un ecommerce que se dedica a la venta de suplementos deportivos, nutricionales y de control de peso.

# Implementación:

El sitio fue creado con React JS, para su implementación se utilizaron los siguientes paquetes:

- [Create-React-App](https://create-react-app.dev/docs/getting-started)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Firebase](https://firebase.google.com/)

En caso de querer replicar el proyecto debes seguir estos pasos desde tu git bash:

    git clone https://github.com/emanuelhg/tiendaSabieGuzzetti

    cd tiendaSabieGuzzetti

    npm install

    npm start

Los datos correspondientes a las credenciales de la base de datos se encuentran en un archivo .env por fuera del proyecto en Github. En caso de procisarlo, enviame un email.

# Funcionalidades:

Con objeto de cumplir con las diferentes funcionalidades solicitadas, el diseño y manejo del sitio se han mantenido lo más sencillo posible. Al ingresar, nos encontramos directamente con los productos ofrecidos, cada uno posee una foto, breve descripción, categoría asociada y la posibilidad de ver más detalles mediante un botón. De precisarlo, con un dropdown se podrá filtrar por categoría (suplementos deportivos, nutricionales y control de peso):

<p align="center"><img src="https://media.giphy.com/media/vx91JE0OJIMDh6wQUD/giphy.gif" alt="Intro Sabie"/></p>

Al ingresar sobre el detalle de un producto observaremos su imagen asociada y un acordeón conteniendo la descripción completa. Por otro lado, podremos seleccionar la cantidad mediante 2 botones, uno para aumentar y otro para disminuir. En caso de que la cantidad intente ser menor a 1 o mayor a 5, se deshabilitará el botón correspondiente. Por último, podremos agregar el producto al carrito y obtener una confirmación mediante una alerta:

<p align="center"><img src="https://media.giphy.com/media/ySOxNi6D7UxRMky9Dz/giphy.gif" alt="Producto SaBie"/></p>

De encontrar productos en el carrito, el icono que se encuentra en la parte superior derecha irá reflejando la cantidad de objetos correspondientes en él. En caso de borrar o eliminar, el contador numérico desaparecerá:

<p align="center"><img src="https://media.giphy.com/media/yoTcRKVR0hmkbxhPbs/giphy.gif" alt="Icono carrito SaBie"/></p>

Mediante un botón luego de agregar un producto o haciendo clic en el icono correspondiente podremos acceder al carrito de compras para ver su contenido:

<p align="center"><img src="https://media.giphy.com/media/xw7FMEWcS9KvnySLrU/giphy.gif" alt="Ir al carrito SaBie"/></p>

El carrito estará compuesto por dos tablas, la primera contendrá el detalle de los productos seleccionados, su cantidad, subtotal y un botón para eliminar de forma individual cada item. La segunda, la cantidad total de ítems, el precio final de la compra y dos botones que permitirán seguir comprando o eventualmente borrar el pedido completo (si el carrito se encuentra vacío obtendremos un mensaje afín y un botón para volver al listado de productos).

En la parte inferior nos encontraremos con un formulario y un botón para finalizar la compra, el cual estará deshabilitado hasta que completemos los campos requeridos:

<p align="center"><img src="https://media.giphy.com/media/sJ5Fba3XpnD4AfID4A/giphy.gif" alt="Vista carrito SaBie"/></p>

El formulario contendrá los siguientes campos:

- Nombre.
- Apellido.
- Teléfono.
- Email.
- Confirmación de email.

Todos los campos son obligatorios y tienen validación según el tipo de dato solicitado Al estar correctos, se irán marcando con un recuadro de color verde y un tilde; por último se habilitará el botón de 'finalizar compra', caso contrario, quedarán rojos y debajo se observará una advertencia (no se podrá finalizar la compra hasta que se resuelva satisfactoriamente el formulario):

<p align="center"><img src="https://media.giphy.com/media/b2Pm4FsXCTWZe70yu8/giphy.gif" alt="Formulario compra SaBie"/></p>

Al finalizar la compra obtendremos un mensaje de alerta con la confirmación del proceso y un ID de compra asociado. El carrito quedará vacio y podremos acceder al listado de productos desde el botón correspondiente:

<p align="center"><img src="https://media.giphy.com/media/nR3MyCWSaGp5c6dAP8/giphy.gif" alt="Finalizar compra SaBie"/></p>

El sitio tambien se puede utilizar con las mismas funcionalidades en su versión mobile:

<p align="center"><img src="https://media.giphy.com/media/7H8cThIMUM3KO2kvgN/giphy.gif" alt="Mobile SaBie"/></p>

---

> <p align="center"> Cualquier comentario o sugerencia es bienvenida. Gracias por tu tiempo!</p>











