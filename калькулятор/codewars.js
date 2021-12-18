let input1 = document.querySelector('#inputSq');
let input2 = document.querySelector('#inputPr');
let button1 = document.querySelector('#buttonSq');
let button2 = document.querySelector('#buttonPr');

button1.addEventListener('click', function(){
  input1.value = Number(input1.value) * Number(input1.value);
});

button2.addEventListener('click', function(){
  input2.value = Number(input2.value) * 4
});

input1.addEventListener('click', function(){
  input1.value = '';
});

input2.addEventListener('click', function(){
  input2.value = '';
});