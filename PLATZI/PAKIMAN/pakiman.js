var imagenes = [];
imagenes ["Cauchin"] = "vaca.png"; // array asociativos con valores de cadena (letras)
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";
 //creo una instancia de la clase pakiman

var coleccion = []; // variable donde tengo todos los pakimanes, array numero por las posiciones 0,1,2
coleccion.push (new Pakiman ("Cauchin",100,30));//puedo crear una coleccion de instancias sin crear una variable q lo indique
coleccion.push (new Pakiman ("Pokacho",80,50));
coleccion.push (new Pakiman ("Tocinauro",120,40));


//var cauchin = new Pakiman ("Cauchin",100,30), asi muestro los pakimanes de manera individual
// podria agregar esa variables a var coleccion=[];
// coleccion.push(cauchin);
//cauchin.mostrar();//forma de mostrarlos antes de poner en la funcion de abajo(for)
// cuando agrego directamente el nuevo pakiman a coleccion sin usar la var cauchin toda la referencia siempre ira como string ""

for ( var x in coleccion)//para cada x (objeto) dentro de coleccion, los x serian "cauchin","pokacho","tocinauro"
{
  console.log (x);// carga solo el indice de los elemnetos, o sea las posiciones 0,1,2, pero no los atributos nombre vida y ataque
  // si hago //
  console.log (coleccion[x]);
  // sale toda la info de cada uno de los objetos (pakimanes)
  //porque estoy haciendo log de x la cual contiene todas las posiciones desde 0 a 2, por ende todos los pakimanes
  // ojo sale los indices o la info pero en pantalla nada pq no debo invocar funcion mostrar.
}

for (var f of coleccion)//  of hace el codigo anterior mas sencillo, muestra directamente las instancias
{
  console.log(f);// hago log solo a la variable que itera y salen todos los objetos de una vez
  f.mostrar();
}

for (var x in coleccion[0])//cuando creo la clase soy explicito con los atributos por eso los obtengo alhacer el console.log
{
  console.log(x);// muestra la info del pakiman en la posicion [0] si lo hago con of no funciona
}
