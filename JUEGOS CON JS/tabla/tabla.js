let div = document.getElementById("table")
let tr = document.createElement('tr')
let td = document.createElement('td');

// p.textContent = "hola";

for (let index = 1; index <= 10; index++) {
 let tr = document.createElement("tr");
 tr.textContent=index;
 div.append(index);

 for (let i = 0; i < index; i++) {
   let td = document.createElement("td");
   tr.append(td);
 }
}