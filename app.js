const color = document.querySelector('#btn1');
const btn = document.querySelector('#submit');
const board = document.querySelector('.colorboard'); 
const bheight = document.querySelector('#height');
const bwidth = document.querySelector('#width');
const clear = document.querySelector('#clear');


btn.addEventListener('click', function(e){

let h = bheight.value;
let w = bwidth.value;

let box = document.createElement('div');
box.setAttribute("class", "box");
box.style.backgroundColor = color.value;
box.style.height = h;
box.style.width =  w;

board.appendChild(box);

console.log(typeof h);





})

clear.addEventListener('click', function(e){
     
    board.removeChild(board.lastElementChild);
})