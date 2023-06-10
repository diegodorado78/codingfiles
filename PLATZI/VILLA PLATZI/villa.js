 var vp = document.getElementById("villaplatzi");
 var papel = vp.getContext("2d");
var papel_Dimensiones = vp.getBoundingClientRect();
 var papel_ancho = papel_Dimensiones.width;
 var papel_alto = papel_Dimensiones.height;

 document.addEventListener ("keydown",moverCerdo);

 var fondo=
{
  url: "tile.png",
  cargaOK: false
}
  var vaca =
  {
   url: "vaca.png",
   cargaOK: false
  };

   var pollo =
   {
    url: "pollo.png",
    cargaOK: false
   };
    var cerdo =
    {
      url: "cerdo.png",
      cargaOK: false,
      x: 250,
      y: 250
    };

 var cantidad_vacas = 3
  var cantidad_pollos = 5
   var cantidad_cerdos = 1

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
    papel.drawImage(fondo.imagen, 0,0);
  }
     if (vaca.cargaOK)
    {
      for (var i = 0; i < cantidad_vacas; i++)
      {
        var x = aleatorio (0,10);
        var y = aleatorio (0,10);
         x = (x * 42)
         y = (y* 42)
       papel.drawImage(vaca.imagen,x,y);
      }
    }
       if (pollo.cargaOK)
        {
          for (var i = 0; i < cantidad_pollos; i++)
           {
          var x = aleatorio (0,5);
          var y = aleatorio (0,5);
           x = (x * 80)
           y = (y* 80)
          papel.drawImage(pollo.imagen,x,y);
           }
        }
        if (cerdo.cargaOK)

        {
          x = cerdo.x;
          y = cerdo.y;
          papel.drawImage(cerdo.imagen,x,y);
        }
 }
console.log("numero de pollos " + cantidad_pollos )



  function moverCerdo(evento) //puede llamarse como sea, nombro la variable para que muestre los datos que  obtengo al invocar  la funcion
      {
        console.log(cerdo.x,cerdo.y)
        if (evento.key == "ArrowLeft") {
          if (cerdo.x < 0){
            cerdo.x = cerdo.x;
          } else {
            cerdo.x = cerdo.x-10;
          }
        dibujar ();
      }
        if (evento.key == "ArrowRight") {
          if (cerdo.x > papel_ancho-20){
            cerdo.x = cerdo.x;
          } else {
            cerdo.x = cerdo.x+10;
          }
        dibujar ();
        }
        if (evento.key  == "ArrowUp") {
          if (cerdo.y < 0){
            cerdo.y = cerdo.y;
          } else {
            cerdo.y = cerdo.y-10;
          }
        dibujar ();
      }
      if (evento.key == "ArrowDown") {
        if (cerdo.y > papel_alto - 80){
          cerdo.y = cerdo.y;
        } else {
          cerdo.y = cerdo.y+10;
        }
      dibujar ();
    }
}
      function aleatorio (min,max)
      {
        var resultado;
        resultado = Math.floor(Math.random()*(max-min +1))+min;
        return (resultado);
      }
