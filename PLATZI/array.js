var billetes = [[1,2,3],[4,5,6],[7,8,9]];
console.log(billetes[1][2])
console.log("mamá se programar");
var suma = billetes[1]+ billetes[2];
console.log(suma);
 var a =10;
 var b ="12";
 var c = b+a;
 console.log (c);
 var d = c + 12;
 console.log (d);
 var entrar = 0;
var altura = 101;
if( altura > 100 || altura < 50){
    entrar = 1;
}
else if(altura > 60 || altura < 40){
    entrar = 2;
}
console.log(entrar);
var contador = 2;
var na = "na";
while(contador)
{
    na += na;
    contador -= 1;
}
console.log(na + " Freddy ")
function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);
console.log(vida);
function declarar() {
   variable = 12;
}
declarar();
console.log(variable);
var variable;
if(variable) {
  console.log("funciona");
}
else{
  console.log("no funciona");
}
 z = Math.ceil(4.64);
 console.log(z);
 console.log(variable);
function declarar() {
   variable = 12; // la var puede estar declarada pero solo dentro de la function
}
