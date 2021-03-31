// sum two number   p. 219 
// 

let num1, num2;

do 
{
 num1 = prompt("Input number one: ");
 if ( isFinite( num1) ) { num1 = +num1;  break;}
 alert("Wrong input" + "  " + num1);   
}  while ( !isFinite( num1) );

do 
{
 num2 = prompt("Input number two: ");
 if ( isFinite( num2) ) { num2 = +num2;  break;}
 alert("Wrong input" + "  " + num2);   
}  while ( !isFinite( num2) );

alert(num1 + num2);  






