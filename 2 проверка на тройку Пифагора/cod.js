let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

input1.addEventListener('click', function(){
  input1.value = '';
});
input3.addEventListener('click', function(){
  input3.value = '';
});
input2.addEventListener('click', function(){
  input2.value = '';
});

let x1;
let x2;
let x3;

button.addEventListener('click', function(){
  x1 = Number(input1.value);
  x2 = Number(input2.value);
  x3 = Number(input3.value);
  if (x1 > x2 && x1 > x3){
    funcX1();
  } else if (x2 > x1 && x2 > x3){
    funcX2();
  } else if (x3 > x1 && x3 > x2){
    funcX3();
  } else {
    result.value = 'неверное условие';
  }
});

function funcX1 (){
  if (Math.pow(x1, 2) == (Math.pow(x2, 2) + Math.pow(x3, 2))) {
    result.value = 'тройка Пифагора!'
  } else {
    result.value = 'неверное условие';
  }
}

function funcX2 (){
  if (Math.pow(x2, 2) == (Math.pow(x1, 2) + Math.pow(x3, 2))) {
    result.value = 'тройка Пифагора!'
  } else {
    result.value = 'неверное условие';
  }
}

function funcX3 (){
  if (Math.pow(x3, 2) == (Math.pow(x2, 2) + Math.pow(x1, 2))) {
   return result.value = 'тройка Пифагора!'
  } else {
   return result.value = 'неверное условие';
  }
}