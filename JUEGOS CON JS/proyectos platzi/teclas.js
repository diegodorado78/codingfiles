 var lienzoTeclas = document.querySelector('#lienzoTeclas');
    var lTeclas= lienzoTeclas.getContext("2d");
    document.addEventListener("keydown",dibujoT);

    var lienzoMouse = document.getElementById('lienzoMouse');
    var lMouse= lienzoMouse.getContext("2d");
    lienzoMouse.addEventListener("mousemove",dibujoM);
    
    var x= 200;//se decalra fuera para que tenga alcance global al modificarse con cada tecla presionada
    var y=150;
    var teclas= {
   UP: 38,
   RIGHT:39,
   DOWN: 40,
   LEFT:37
 }
 //funcion dibujar linea
 function dibujarLinea(color,xi,yi,xf,yf,l){
     l.beginPath();
     l.lineWidth=3;
     l.strokeStyle= color;
     l.moveTo(xi,yi);
     l.lineTo(xf,yf);
     l.stroke();
     l.closePath();
 }
 //funcion dibujar en el canvas con teclado

  function dibujoT(event){
      colorcito= "blue"
    var mov= 10;
       if (event.keyCode==teclas.LEFT) {
           dibujarLinea(color,x,y,x-mov,y,lTeclas);
           x=x-mov;
       } if (event.keyCode==teclas.RIGHT) {
        dibujarLinea(color,x,y,x+mov,y,lTeclas);
        x=x+mov;
       } 
       if (event.keyCode==teclas.DOWN) {
        dibujarLinea(color,x,y,x,y+mov,lTeclas);
        y=y+mov;
       }if (event.keyCode==teclas.UP) {
        dibujarLinea(color,x,y,x,y-mov,lTeclas);
        y=y-mov;
        }
}
//funcion dibujar en el canvas con mouse
function dibujoM(event){
    colorcito="blue";
  var mov=1;
  var xi= event.layerX;
  var yi= event.layerY;
  var xf= event.layerX-mov;
  var yf= event.layerY-mov;
  
    dibujarLinea(colorcito,xi,yi,xf,yf,lMouse);
}  
//funcion color random
function color(){
    var r=Math.round(Math.random()*255);
    var g=Math.round(Math.random()*255);
    var b=Math.round(Math.random()*255);
    var a =1;
    return this.rgba = "rgba("+r+", "+g+", "+b+", "+a+")";// devuelve el valor de que creo la funcion
}