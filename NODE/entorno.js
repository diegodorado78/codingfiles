let nombre = process.env.NOMBRE||'sin nombre'; //variables de entorno externas
let url = process.env.URL|| 'no web';

console.log("hola " +nombre );
console.log("entra a mi web " + url);
//CORRER ARCHIVO NODE EN LA TERMINAL

//Asignar valores a la var de ambiente
//NOMBRE=diego URL=diego.com node entorno.js