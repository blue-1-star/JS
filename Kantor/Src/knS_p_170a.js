// multiplyNumeric(obj) function multiply on 2 every numeric in object 
let salaries = {
"Вася": 100,
"Петя": 300,
"Даша": 250,
"title" : "DAO"
};

for( let key in salaries) {
  //( typeof(salaries[key]) == numeric ? salaries[key] *= 2 : continue;)
  if ( typeof(salaries[key]) == "number" )   salaries[key] *= 2;
}
for ( let key in salaries) 
alert(salaries[key]);


	