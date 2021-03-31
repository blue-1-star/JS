// function random number between min - max   p. 220 
// 
function  random(min, max) {
 return min + Math.random() * ( max- min);
}	

function  randomInteger(min, max) {
 return  Math.floor( min + Math.random() * (1 + max- min));
}	


alert(`random number : ${random(1,5)}`);
alert(`random number : ${random(1,5)}`);

alert( `random int number : ${randomInteger(1,6)}`);
alert( `random int number : ${randomInteger(1,6)}`);
alert( `random int number : ${randomInteger(1,6)}`);
alert( `random int number : ${randomInteger(1,6)}`);
//alert(readNumber1());


  






