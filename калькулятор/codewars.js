let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let result = document.querySelector('#result');

let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function(){
  console.log(result.value);
  result.value = Number(input1.value) * Number(input2.value); 
});
button2.addEventListener('click', function(){
  console.log(result.value);
  result.value = (Number(input1.value) * 2) + (Number(input2.value) * 2); 
});