 class Pakiman // es la definicion de un objeto,
{
  constructor (n,v,a )//funcion que se dispara cuando se esta creando el objeto
  {
    this.imagen = new Image(); // nueva clase de tipo image
    this.nombre = n;
    this.vida =  v;
    this.ataque = a ; // si ejecuto el cod sin la var = new no pasa nada
    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write ("<p>");//no es necesario poner tag <p>, puedo poner un br al inicio de img
    document.write ("<strong>"+ this.nombre + "</strong><br />");
    document.write (" vida "+ this.vida + "<br />");
    document.write (" ataque " + this.ataque +"<hr />" );
    document.write ("</p>");
  }
}
 
