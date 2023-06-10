var teclas =
{
  UP:38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var dibujo_teclas = document.getElementById("area_teclas")
var papel_teclas = dibujo_teclas.getContext ("2d");
document.addEventListener ("keydown",dibujarTeclado);

var dibujo_mouse = document.getElementById("area_mouse")
var papel_mouse = dibujo_mouse.getContext ("2d");
dibujo_mouse.addEventListener ("mousemove", dibujarMouse);
dibujo_mouse.addEventListener ("mouseup", dibujarMouse);

var x = 100
var y = 100

function dibujarLinea(color,xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
  }
function dibujarTeclado(evento) //puede llamarse como sea, nombro la variable para que muestre los datos que  obtengo al invocar  la funcion
{
var colorcito = "green"
var movimiento = 3;
  //console.log(evento);
  switch (evento.keyCode)
  {
    case teclas.LEFT:
    dibujarLinea(colorcito,x,y,x-movimiento,y,papel_teclas);
    x= x-movimiento;
      break;
    case teclas.RIGHT:
    dibujarLinea(colorcito,x,y,x+movimiento,y,papel_teclas);
    x= x+movimiento;
      break;
      case teclas.UP:
     dibujarLinea(colorcito,x,y,x, y-movimiento,papel_teclas);
      y= y-movimiento; //este es el cambio del punto final
        break;
        case teclas.DOWN:
        dibujarLinea(colorcito,x,y,x,y+movimiento,papel_teclas);
        y= y+ movimiento;
          break;
  }
}
  function dibujarMouse(event) //puede llamarse como sea, nombro la variable para que muestre los datos que  obtengo al invocar  la funcion
{
    //console.log(event);
  var colorcito = "black"
  var movimiento = 1;
  xi= event.layerX
  yi=event.layerY
  xf= event.layerX -movimiento;
  yf= event.layerY - movimiento;

  if (event == xi,yi)
  {
    if (event.button == 0)
    dibujarLinea(colorcito,xi,yi,xf,yf,papel_mouse);

  }
}
