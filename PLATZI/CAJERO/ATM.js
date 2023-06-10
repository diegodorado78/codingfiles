class Billete
 {
  constructor(v,c)
  {
    this.imagen = new Image ();
    this.valor = v;
    this.cantidad = c;
    this.imagen.src = imagenes[this.valor];
  }
}
var dineroEntregado = []; //array billetes que voy entregando  en cada ciclo
var div = 0;
var papelesEntregados = 0;// billetes entregados en cada iteracion del ciclo,
//es la misma variable que tiene valor diferente en cada iteracion
var resultado = document.getElementById("resultado");//la utilizo para hacer un nuevo renglon donde va el resultado
var b = document.getElementById ("extraer");

b.addEventListener("click",entregarDinero)// importante pq al suceder el evento es que se dispara la funcion
if (dineroFinal< 0)
{
  alert("se ha acabado el dinero, vuelve luego :D ")
}
var imagenes = [];
imagenes["20"]= "billete20.png";
imagenes["10"]= "billete10.png";
imagenes["50"]= "billete50.png";
var caja = []; //coleccion de billetes que tengo en la caja
caja.push(new Billete(50,10));
caja.push(new Billete(20,30));
caja.push(new Billete(10,10));
var dineroInicial = 0
var dineroFinal = 0
var dinero_entregado = 0
//for (const c of caja)
caja.forEach((c) => {
    dineroInicial += (c.valor*c.cantidad)
});
console.log("saldo inicial "+ dineroInicial);
//caja.push("hola")//puedo agregar nuevos elementos y no necesariamente deben ser de la clase billete
//console.log(caja); asi confirmo los elementos que tiene el array caja incluidos los que estan dentro de la clase y los que no
function entregarDinero()
{
 var t = document.getElementById("dinero");
 let dineroPedido = parseInt(t.value);// value hace referencia al valor insertado por el user
 //estoy declarando la variable del dinero pedido por el usuario y lo conviertoel text  a numero con parse int
  for(var bi of caja)// bi es variable que itera (i) con los elementos(billetes) del array caja
  {
    //console.log(bi);//puedo hacer un console para ver si aparece los elementos nuevos con los atributos de la clase
    if (dineroPedido > 0)//condicion importante del ciclo
    {
       div = Math.floor(dineroPedido / bi.valor );//uso math.floor para ignorar decimales y seguir con otros billetes
 //console.log(div); hago un log para ver que todo funcione ok, a este punto deberia hacer la div por cada billete
//es decir, sin mirar lo que esta luego del primer if, si dinero:210 seria 4 de 50 o 10 de 20 21 de 10
      if(div > bi.cantidad)// si el resultado es mayor solo puedo entregar los billetes que tengo no mas...
      {
        papelesEntregados= bi.cantidad;
     }
     else
     {
       papelesEntregados = div;
     }
     dineroEntregado.push(new Billete(bi.valor, papelesEntregados));//operacion que muestra los bi entregados
     //hago push para agregar los entregados a la matriz cada vez que itera
     dineroPedido = dineroPedido - (bi.valor*papelesEntregados);
     //debo hacer la resta para en la siguiente iteracion no volver a tomar esos valores ya entregados
   }//si la resta da cero la condicion no se cumple y el bloque de codigo no se ejecuta
   //console.log(dineroEntregado);// puedo hacer este console para ver que tanto entregue
  }
  for ( a of dineroEntregado)
  {
    dinero_entregado = dinero_entregado + (a.valor*a.cantidad)
  }
  console.log("se ha entregado:" + dinero_entregado);
//estas lineas siguientes estan por fuera del ciclo porque a este punto ya gaste todos los billetes
  if (dineroPedido > 0)
  // hago esto por si luego del ciclo aun queda dinero por entregar
  {
resultado.innerHTML = "se acabo el dinero o no puedo darte esa cantidad";
  }
  else
  {
   for (var e of dineroEntregado)// e es la variable que se crea, la cual itera como en i=0 i<10 i++
    {
    //inicialmen  tepuedo hacer un doc.write(e.cantidad + " billetes"+ e.valor)
      if(e.cantidad > 0)//esta condicion me indica que se muestran solo los billetes usados cuando hubo e.cantidad
    // esto muestra lo que entrego una vez se ha hecho push al array con lo entregado
    // se utiliza la var resultado para llevar el codigo y ponerlo en el parrafo resultado y se muestre en pantalla
    // e es una instancia de la clase billete, porque entregado es una array que le hacemos push con la clase billete
  {
    resultado.innerHTML += e.cantidad + " billetes de " + e.valor + "<img src = "+ e.imagen.src+" />" + "<br />"
    dineroFinal= dineroInicial-dinero_entregado
    resultado2.innerHTML= "saldo restante:" + dineroFinal
    if (dineroPedido> dineroFinal)
    {
  resultado2.innerHTML= "se ha acabado el dinero :S "
    }
    //debo poner resultado.inner dos veces para que encadene los resultados de cada iteracion
    //asi: r.innerHTML= r.innerHTML + e.cantidad...
}// al poner la var resultado(innerhtml) adhiero un parrafo vacio al html el cual manipulo aqui en js y asi carga con todo lo demas sino pondria el resultado borrando el cajero
}// pero si es importante hacerlo con innerHTML para agregar una rama al arbol y asi no usa doc.write el cual deconstruye una vez se ha cargado
}// a este punto cuando lo invoco ya la pagina ha cargado, entonces si hago doc.write me borra todo y solo sale este.
limpiarExtraccion();
}
function limpiarExtraccion(){
  for (var li of dineroEntregado){
    li.valor = 0;
    li.cantidad = 0;
  }
}
//al final del algoritmo puedo hacer console.log de dineroPedido para saber si quedo faltando algo, podria suceder si por ejemplo me piden 105 y no tengo billetes de 5
