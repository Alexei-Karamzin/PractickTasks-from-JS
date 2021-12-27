'use strict'
let input = document.querySelector('#input');
let button = document.querySelector('#button');
let result = document.querySelector('#result');

input.addEventListener('click', function(){
  input.value = '';
});

button.addEventListener('click', function(){
  getDivisors ();
});

function getDivisors (){
  let number = Number(input.value);
  let arr =[];

  for (let i = 1; i<= number; i++){
    if (number % i === 0){
      console.log(i);
      arr.push(i);
    }
  } 
  return result.innerHTML = arr;
}
