
# Proyecto creado con Node JS
## `Segunda entrega del desafío final` 
### Servidor API REST con cambio de sistema de almacenamiento local/cloud (filesystem/Mongo Atlas).

## Scritps disponibles:
En la carpeta de los proyecto hay varios comandos que podés correr. 
El primer comando luego de clonar o bajar y descomprimir el proyecto de backend es el necesario para instarlar todas las dependencias para la ejeción de la app:

```
  npm i
```
Luego para poder correr la aplicación de manera nativa:

```
  npm start
```
Si no se puede aprovechar la dependencia de desarrollo NodemonJS y ejecutar:

```
  npm run dev
```

Este comando va a hacer que la salida de la app se actualice en tiempo real.
La consola se va a ir recargando a medida de que hagas cambios en el código.

### Si se desea cambiar el sistema de almacenamiento entre las diferentes bases de datos, cambiar la variable "key" entre los valores 1 o 2 (type: Number), esta variable se encuentra en el archivo ./src/dao/index.js 
`El cambio de sistema de bases de datos solo está disponible para el handler productos, no así para el carrito de compras.`

* Para oficiar de administrador es necesario enviar en el `header` de cada una de las peticiones la clave `administrador`, con su respectivo value booleano `true` o `false`, ejemplo:

* ```
  administrador: false
* ```
  administrador: true
## `Endpoints disponibles`

`/api/productos`:

*  `GET '/` Me permite listar todos los productos disponibles(disponible para usuarios y administradores).

*  `GET '/:id'` Me permite listar un producto por su id (disponible para usuarios y administradores).

* `POST: '/'` Para incorporar productos al listado (disponible para administradores).
```
Ejemplo del body necesario en esta petición.
____________________________________________
{
  "nombre":"Cama",
  "descripcion":"Cama tipo king con base",
  "codigo":55668624,
  "foto":"https://www.elmueble.com/medio/2022/09/12/dormitorio-con-mantas-a-pie-de-cama-00539571_99d85a27_600x600.jpg",
  "precio":200,
  "stock":13
}
```

* `PUT: '/:id'` Actualiza un producto por su id (disponible para administradores).
```
Ejemplo del body necesario en esta petición.
____________________________________________
{
  "nombre":"Cama",
  "descripcion":"Cama tipo king con base",
  "codigo":55668624,
  "foto":"https://www.elmueble.com/medio/2022/09/12/dormitorio-con-mantas-a-pie-de-cama-00539571_99d85a27_600x600.jpg",
  "precio":200,
  "stock":13
}
```

* `DELETE: '/:id'` Borra un producto por su id (disponible para administradores).

---

`/api/carrito`:

*  `POST: '/'` Crea un carrito y devuelve su id.

*  `DELETE: '/:id'` Vacía un carrito y lo elimina.

*  `GET: '/:id/productos'` Me permite listar todos los productos guardados en el carrito.

*  `POST: '/:id/productos'` Para incorporar productos al carrito por su id de producto.

*  `DELETE: '/:id/productos/:id_prod'` Eliminar un producto del carrito por su id de carrito y de producto.
---
## 🚀 Sobre mi.
Mi nombre es Juan Isa, soy FullStack developer con más de una década de experiencia 
autodidacta en el desarrollo de aplicaciones de escritorio y móviles en diversos tipos de lenguajes de programación.

