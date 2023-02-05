//CAMBIAR LA VARIABLE "key" CON LOS VALORES 1 (para trabajar con base de datos local, sistema de archivos) O 2 (para base de datos no relacional remota con Mongo Atlas) 

//-----------------
let key = 2;
//-----------------

let PERSISTENCIA;

switch (key) {
    case 1:
        PERSISTENCIA = 'filesytem'
        break;
    case 2:
        PERSISTENCIA = 'mongo'
        break;
    default:
        PERSISTENCIA = 'mongo'
        break;
}

//Importación dinámica con lazy loading de módulos. Resolución de promesas asíncronas en la importación de este módulo.
const myModule = PERSISTENCIA === 'filesytem' ? import('./filesystem/handlerProductos.js') : import('./mongodb/handlerProducts.js');
export default myModule;