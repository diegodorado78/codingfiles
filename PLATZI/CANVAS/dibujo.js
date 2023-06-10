var texto = document.getElementById ("texto_linea");
var boton = document.getElementById ("botoncito");
boton.addEventListener("click",dibujoPorClick);

var textoDos = document.getElementById("texto_lineaDos");
var botonDos = document.getElementById("botoncitoDos");
botonDos.addEventListener("click",dibujoPorClickDos);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function color()
{
var r = Math.round(Math.random()*255);
var g = Math.round(Math.random()*255);
var b = Math.round(Math.random()*255);
var a = 1; //transparencia entre 0 a 1
return this.rgba = "rgba("+r+", "+g+", "+b+", "+a+")";
}

function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color();
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
};
function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  //var colorcito = "blue"
  //var colorsote = "red"
  var espacio = ancho/(lineas*2)
  var xi, yf;

 for ( l= 0; l < lineas; l++ )
   {
   yi = (l* espacio)+ espacio ;
   xf = 300-(espacio *l) ;
   dibujarLinea (color,300,yi,xf,300);//tome .5 para tomar la parte del pixel que me interesa

   yi = (l*espacio) ;
   xf = (espacio*l)+300 ;
   dibujarLinea (color,300,yi,xf,300);

   yi = 600-(l* espacio) ;
   xf = 300-(espacio*l) ;
   dibujarLinea (color,300.5,yi,xf,300.5);

   yi = (l* espacio)+300 ;
   xf = 600-(l* espacio) ;
   dibujarLinea (color,300.5,yi,xf,300.5);
   }

}

  function dibujoPorClickDos ()
{
    var lineas = parseInt(textoDos.value);
    var l = 0;
    var yi, xf;
    var colorcito = "blue"
    var colorsote = "red"
    var espacio = ancho/(lineas*3)
    var xi, yf;

  for(l = 0;  l < lineas; l++)
    {
      xi= 500-(l*espacio)// El original es 600
      yi= 100+(l * espacio)
      xf= 300 + (l* espacio)
      yf= 300 + (l* espacio)
      dibujarLinea (color,xi,yi,xf,yf)

      xi= 500-(l*espacio)
      yi= 500-(l * espacio)
      xf= 300 -(l* espacio)
      yf= 300 +(l* espacio)
      dibujarLinea (color,xi,yi,xf,yf)

      xi= 100+(l*espacio)
      yi= 500-(l * espacio)
      xf= 300 -(l* espacio)
      yf= 300 -(l* espacio)
      dibujarLinea (color,xi,yi,xf,yf)

      xi= 100+(l*espacio)// el original es sin el 100
      yi= 100+(l * espacio)
      xf= 300 +(l* espacio)
      yf= 300 -(l* espacio)
      dibujarLinea (color,xi,yi,xf,yf)
      }
}

dibujarLinea(color,0,0,600,600);
dibujarLinea(color,600,0,0,600);
