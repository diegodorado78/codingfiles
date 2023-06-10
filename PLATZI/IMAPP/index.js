// const array = [];

// for (let i = 2; i <= 20; i++) {
//   i % 2 === 0 ? array.push(i) : '';
// }
// // console.log(array);

// const array1=[]
// const array2=[]

// for (let i = 1; i <= 5; i++) {
// array1.push(new Array(i))
// }
// // for (let j = 1; j <= 5; j++) {
// //   array1[i].push(j);
// // }
//   console.log(array1);

  // var $array = [];
  // var contador = 0;
  // // var dom = document.querySelector(".ejercicio7");
  // for (let $i = 1; $i <= 5; $i++) {
  //   $array.push($i);
  // }

  // $array.forEach((numero) => {
  //   for (let i = 1; i <= $array.length; i++) {
  //      let x= new Array(1)
  //      x.push(i)
  //   }
  //   if (contador == 0) {
  //     // var p = document.createElement("span");
  //     // p.innerHTML = numero + " ";
  //     // dom.append(p);
  //     // console.log(p);
  //   }
  //   contador = 0;
  // });
  // console.log($array);

var x = new Array(5);

for (var i = 0; i < x.length; i++) {

  x[i] = new Array(5);
}
  x[i].push(i);

console.log(x);
