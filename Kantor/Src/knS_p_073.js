
	let login = prompt("Login :","unknown");
	let pwd;
	if (login == "Admin")  {  pwd = prompt("input  Password");
		if( pwd == "Main") alert("hello!");
			else if ( pwd == null) alert("Cancelled password");
				else alert("Wrong password");
							}
		else if ( login == null ) alert ("Cancelled"); 
		else   {alert("I don't know you")};
	
	
	
	//alert( login);	
