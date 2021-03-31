// sum two number   p. 219 
// 
function  readNumber1() {
 do 
 {
  num1 = prompt("Input number  ");
  if ( isFinite( num1) ) { return +num1} 
	else if (num1 == null ) return null;
  alert("Wrong input" + "  " + num1);   
 }  while ( !isFinite( num1) );

}	

function readNumber() {
let num;
do {
num = prompt("Введите число", 0);
} while ( !isFinite(num) );
if (num === null || num === '') return null;
return +num;
}
alert(`Число: ${readNumber()}`);


//alert(readNumber1());


  






