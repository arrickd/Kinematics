// JavaScript Document

function calculate(){
	
	var d = document.getElementById("Distance").value;
	var a = document.getElementById("Acceleration").value;
	var u = document.getElementById("Initial_Velocity").value;
	var v = document.getElementById("Final_Velocity").value;
	var t = document.getElementById("Time").value; 
	
	if(document.getElementById("message").style.display === "block")
	{
		document.getElementById("message").style.display = "none";
	}
	
	//if a =0, u and v must be equal
	if( u*u !== v*v && a*1 === 0)
	{
		document.getElementById("message").style.display = "block";
		alert("entered");
		return;	
	}
	
	//distance can't be 0
	if(d*1 === 0)
	{
		document.getElementById("message").style.display = "block";
		return;
	}
	
	if(t*1 === 0 && d*1 !== 0)
	{
		document.getElementById("message").style.display = "block";
		return;
	}
	 
	var choice = 0;
	
	if(d !== "" && u !== "" && v !== ""){
		choice = 1;
	}
	if(d !== "" && u !== "" && a !== ""){
		choice = 2;
	}
	if(d !== "" && u !== "" && t !== ""){
		choice = 3;
	}
	if(d !== "" && v !== "" && a !== ""){
		choice = 4;
	}
	if(d !== "" && v !== "" && t !== ""){
		choice = 5;
	}
	if(d !== "" && a !== "" && t !== ""){
		choice = 6;
	}
	if(u !== "" && v !== "" && a !== ""){
		choice = 7;
	}
	if(u !== "" && v !== "" && t !== ""){
		choice = 8;
	}
	if(u !== "" && a !== "" && t !== ""){
		choice = 9;
	}
	if(v !== "" && a !== "" && t !== ""){
		choice = 10;
	}

	switch(choice)
	{		
		case 1:
			document.getElementById("Acceleration").value = (v*v - u*u) / (2*d);
			document.getElementById("Time").value = 2*d/(u+v); 
			break;
		case 2:
			document.getElementById("Final_Velocity").value = "+/- "+Math.sqrt(Math.sqrt((u*u+2*a*d)*(u*u+2*a*d)));
			document.getElementById("Time").value = -1*u/a+" +/- "+Math.sqrt(Math.sqrt((2*a*d+u*u)*(2*a*d+u*u)))/a;
			break;
		case 3:
			document.getElementById("Final_Velocity").value = 2*d/t-u;
			document.getElementById("Acceleration").value = 2*(d-u*t)/(t*t);
			break;
		case 4:
			document.getElementById("Initial_Velocity").value = "+/- "+Math.sqrt(Math.sqrt((v*v-2*a*d)*(v*v-2*a*d)));
			document.getElementById("Time").value = 2*d/(v+Math.sqrt(Math.sqrt((v*v-2*a*d)*(v*v-2*a*d))))+" or "+2*d/(v-Math.sqrt(Math.sqrt((v*v-2*a*d)*(v*v-2*a*d))));
			break;
		case 5:
			document.getElementById("Initial_Velocity").value = 2*d/t-v;
			document.getElementById("Acceleration").value = (2*v-2*d/2)/t; 
			break;
		case 6:
			document.getElementById("Initial_Velocity").value = (d-1/2*a*t*t)/t;
			document.getElementById("Final_velocity").value = (d-1/2*a*t*t)/t+(a*t); 
			break;
		case 7:
			document.getElementById("Distance").value = (v*v-u*u)/(2*a);
			document.getElementById("Time").value = (v-u)/a; 
			break;
		case 8:
			document.getElementById("Distance").value = 1/2*(u+v)*t ;
			document.getElementById("Acceleration").value = (v-u)/t ; 
			break;
		case 9:
			document.getElementById("Distance").value = u*t+(1/2)*a*t*t ;
			document.getElementById("Final_Velocity").value = u+a*t; 
			break;
		case 10:
			document.getElementById("Distance").value = 1/2*(2*v-a*t)*t;
			document.getElementById("Initial_Velocity").value = v-a*t; 
			break;
		default:
			document.getElementById("message").style.display = "block";
			break;
	}
		
}