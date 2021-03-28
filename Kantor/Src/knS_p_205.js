// create object Accumulator  p. 205 
// 
function Accumulator(startingValue)  {
	this.value = startingValue, 
	this.read = function() { this.value += +prompt("Input number:")}
};

let accumulator = new Accumulator(0);
accumulator.read();
accumulator.read();
alert(accumulator.value);





