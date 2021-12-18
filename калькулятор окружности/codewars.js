let button1 = document.querySelector('#button1');
let input1 = document.querySelector('#input1');

let button2 = document.querySelector('#button2');
let input2 = document.querySelector('#input2');

button1.addEventListener('click', function(){
  input1.value = Number(input1.value) * 3,14;
});

button2.addEventListener('click', function(){
  input2.value = 2 * Number(input2.value) * 3,14;
});

input1.addEventListener('click', function(){
  input1.value = '';
});

input2.addEventListener('click', function(){
  input2.value = '';
});