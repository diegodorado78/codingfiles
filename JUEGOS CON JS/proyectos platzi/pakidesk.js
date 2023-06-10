var monsters=[  
    {
        name:'pikachu',
        src: './pakidesk/pikachu.png'
    },
    {
        name:'raichu',
        src: './pakidesk/raichu.png'
    },
    {
        name:'squirtle',
        src: './pakidesk/squirtle.png'
    },
    {
        name:'blastoise',
        src: './pakidesk/blastoise.png'
    },
    {
        name:'charmander',
        src: './pakidesk/charmander.png'
    },
    {
        name:'charizard',
        src: './pakidesk/charizard.png'
    },
    {
        name:'bulbasaur',
        src: './pakidesk/bulbasaur.png'
    },
    {
        name:'venasaur',
        src: './pakidesk/venasaur.png'
    },
    {
        name:'chikorita',
        src: './pakidesk/chikorita.png'
    },
    {
        name:'bayleef',
        src: './pakidesk/bayleef.png'
    },
    {
        name:'totodile',
        src: './pakidesk/totodile.png'
    },
    {
        name:'croconaw',
        src: './pakidesk/croconaw.png'
    },
    {
        name:'eevee',
        src: './pakidesk/eevee.png'
    },
    {
        name:'flareon',
        src: './pakidesk/flareon.png'
    },
    {
        name:'jolteon',
        src: './pakidesk/jolteon.png'
    },
    {
        name:'vaporeon',
        src: './pakidesk/vaporeon.png'
    },
    {
        name:'gengar',
        src: './pakidesk/gengar.png'
    },
    {
        name:'gastly',
        src: './pakidesk/gastly.png'
    },
    {
        name:'riolu',
        src: './pakidesk/riolu.png'
    },
    {
        name:'lucario',
        src: './pakidesk/lucario.png'
    }
];
//ORDENAR DE MANERA ALEATORIA
monsters.sort(() => 0.5 - Math.random())

/* METODO PARA ORDENARNOS POR NOMBRE
monsters.sort(function (a, b) {
    if (b.name > .name) {return 1;}
    if (a.name < b.name) {return -1;}
    return 0;
  });
*/
var grid = document.querySelector('.grid');

monsters.forEach((element,index) => {
var div =document.createElement('div');
var p = document.createElement('p');
var imagen= document.createElement('img');
imagen.setAttribute('src',monsters[index].src);
    p.textContent= monsters[index].name;
    //p.innerHTML= monsters[index].name;
    div.append(imagen,p);
    grid.append(div);
    
});
//CON FUNCION VOLTEAR
/*
monsters.sort(() => 0.5 - Math.random());

var grid = document.querySelector('.grid');

monsters.forEach((element,index) => {
var div =document.createElement('div');
var p = document.createElement('p');
var imagen= document.createElement('img');
imagen.setAttribute('src','./pakidesk/cubes.png');
    p.innerHTML= monsters[index].name;
    div.append(imagen,p);
    grid.append(div);
    imagen.addEventListener('click',(element)=>{
      imagen.setAttribute('src',monsters[index].src);

    });
});*/


