
var salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250
};
var sum = 0;
for( var key in salaries) {
	sum += salaries[key];
}
alert("sum = " + sum);
var max =0;
var name = "No";
for( var key in salaries) {
	if ( salaries[key] > max) {
		name = key;
		max = salaries[key];
	}	
	//max > salaries[key] ? max : salaries[key];
}
alert(name + " " + max);
	