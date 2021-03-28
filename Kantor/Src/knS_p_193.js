// create object calculator 
// 

let calculator = {
	read : function() { this.num1 = +prompt("Input number one:");
						this.num2 = +prompt("Input number two:"); 
					  },
	sum : function() { return ( this.num1 + this.num2) },
	mul() { return this.num1 * this.num2 } 	
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());




