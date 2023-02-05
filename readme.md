
# Proyecto creado con Node JS
## `Entrega Nº 11` 
### Mock y normalización de datos.

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

## `En este proyecto vas a poder encontrar dos endpoints particulares: `

* `/api/productos-test`. Este mismo retornará al front 5 productos generados de manera aleatoria con la librería Facker.js 

* `/api/messages`. Este mismo retornará al front la lista completa de mensajes normalizados desde la base de datos Mongo Atlas, además de informar al backend el rendimiento de la normalización. 

### Para oficiar de administrador es necesario enviar en el `header` de cada una de las peticiones la clave `administrador`, con su respectivo value booleano `true` o `false`, ejemplo:

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

