

var area_dibujo = document.getElementById("area_dibujo")
var papel = area_dibujo.getContext ("2d");

area_dibujo.addEventListener ("mousemove", dibujarMouse);
area_dibujo.addEventListener ("mouseup", dibujarMouse);


function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }

function dibujarMouse(event) //puede llamarse como sea, nombro la variable para que muestre los datos que  obtengo al invocar  la funcion
{
  console.log(event);
var colorcito = "black"
var movimiento = 1;
xi= event.layerX
yi=event.layerY
xf= event.layerX -movimiento;
yf= event.layerY - movimiento;

if (event == xi,yi)
{
  if (event.button == 0)
  dibujarLinea(colorcito,xi,yi,xf,yf,papel);

}

  }
