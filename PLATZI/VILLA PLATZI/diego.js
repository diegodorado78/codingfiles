var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener ("keydown",moverCerdo);

var teclas = { LEFT: 37, UP:38,RIGHT:39, DOWN:40 };
var fondo={ url: "tile.png",cargaOK: false};
var vaca ={ url: "vaca.png",cargaOK: false};
var pollo = {url: "pollo.png",cargaOK: false};
var cerdo ={ url: "cerdo.png",cargaOK: false};

var cantidad_vacas = 3;
 var cantidad_pollos = 5;
  var cantidad_cerdos = 1;
  var movimientoCerdo = 10;
  var xVaca = [];
  var yVaca = [];
  var xPollo = [];
  var yPollo = [];
  var xCerdo = [];
  var yCerdo = [];
 xCerdo [0]= 250;
 yCerdo [0]= 250;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image ();
vaca.imagen.src =  vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

 pollo.imagen = new Image();
 pollo.imagen.src= pollo.url;
 pollo.imagen.addEventListener("load",cargarPollo);

  cerdo.imagen = new Image();
  cerdo.imagen.src= cerdo.url;
  cerdo.imagen.addEventListener("load",cargarCerdo);


function cargarFondo ()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca ()
{
  vaca.cargaOK = true;
    dibujar();
}
  function cargarPollo ()
   {
    pollo.cargaOK = true;
    dibujar();
   }
     function cargarCerdo ()
     {
      cerdo.cargaOK = true;
      dibujar();
      }

function dibujar ()
{
 if (fondo.cargaOK)
 {
   papel.drawImage(fondo.imagen,0,0);
 }
    if (vaca.cargaOK)
   {
     for (var i = 0; i < cantidad_vacas; i++)
     {
      xVaca[i] = aleatorio (0,420);
      yVaca[i] = aleatorio (0,420);
      papel.drawImage(vaca.imagen,xVaca[i],yVaca[i]);
     }
   }
      if (pollo.cargaOK)
       {
         for (var i = 0; i < cantidad_pollos; i++)
          {
         xPollo[i] = aleatorio (0,420);
         yPollo[i] = aleatorio (0,420);
         papel.drawImage(pollo.imagen,xPollo[i],yPollo[i]);
          }
       }
       if (cerdo.cargaOK)
       {
         xCerdo[i] = xCerdo[0]
         yCerdo[i] = yCerdo[0]
         papel.drawImage(cerdo.imagen,xCerdo[i],yCerdo[i]);
       }
}

function dibujar2()
{
 if (fondo.cargaOK)
 {
   papel.drawImage(fondo.imagen,0,0);
 }
    if (vaca.cargaOK)
   {
     for(var i = 0; i<cantidad_vacas; i++)
     {
      papel.drawImage(vaca.imagen,xVaca[i],yVaca[i]);
     }
   }
      if (pollo.cargaOK)
       {
         for(var i = 0; i<cantidad_pollos; i++)
         {
          papel.drawImage(pollo.imagen,xPollo[i],yPollo[i]);
         }
       }
       if (cerdo.cargaOK)
       {
         for(var i = 0; i<cantidad_cerdos; i++)
         {
          papel.drawImage(cerdo.imagen,xCerdo[i],yCerdo[i]);
         }
       }
 }
console.log("numero de pollos " + cantidad_pollos )

 function moverCerdo(evento) //puede llamarse como sea, nombro la variable para que muestre los datos que  obtengo al invocar  la funcion
     {
       switch (evento.keyCode)
       {
         case teclas.LEFT:
         if (xCerdo[0]<= 10 )
         {
          xCerdo[0] = 10;
         }
          xCerdo [0]= xCerdo[0]- movimientoCerdo;
          dibujar2();
           break;

         case teclas.UP:
           if (yCerdo[0]<= 0 )
           {
            yCerdo[0] = 0;
           }
            yCerdo[0] = yCerdo[0]- movimientoCerdo;
            dibujar2();
             break;

          case teclas.RIGHT:
           if (xCerdo[0]>= 410)
          {
            xCerdo[0] = 410;
          }
          xCerdo [0] = xCerdo[0]+ movimientoCerdo;
          dibujar2();
          break;

          case teclas.DOWN:
          if (yCerdo[0] >= 420)
          {
          yCerdo[0] = 420;
          }
         yCerdo[0] = yCerdo[0] + movimientoCerdo;
        dibujar2();
         break;
   }
}
     function aleatorio (min,max)
     {
       var resultado;
       resultado = Math.floor(Math.random()*(max-min +1))+min;
       return (resultado);
     }
