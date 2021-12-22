let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let input3 = document.querySelector('#input3');
let res1 = document.querySelector('#result1');
let res2 = document.querySelector('#result2');
let button = document.querySelector('#button');
let NonRes = document.querySelector('#NonRes');

input1.addEventListener('click', function(){
  input1.value = '';
  NonRes.innerHTML = '';
});
input2.addEventListener('click', function(){
  input2.value = '';
  NonRes.innerHTML = '';
});
input3.addEventListener('click', function(){
  input3.value = '';
  NonRes.innerHTML = '';
});

let a;
let b;
let c;
let D;

button.addEventListener('click', function(){
  a = Number(input1.value);
  b = Number(input2.value);
  c = Number(input3.value);
  D = (b * b) - 4 * a * c;
  getRoot(D);
  console.log(D);
});

function getRoot (D){
  if (D > 0){
    res1.value = - (b + Math.sqrt(D)) / (2 * a);
    res2.value = - (b - Math.sqrt(D)) / (2 * a);
    console.log(res1.value, res2.value);
  } else if (D = 0){
    res1.value = - (b / 2 * a);
    res2.value = res1.value;
  } else {
    NonRes.innerHTML = 'нет корней уравнения';
  }
}