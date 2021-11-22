function Time()
{                    
        u = prompt("Enter initial velocity(u)");	
	document.write("Initial Velocity: " + u + "<br>");
	u = parseFloat(u);
        a = prompt("Enter acceleration(a)");
	document.write("Acceleration: " + a + "<br>");
	a = parseFloat(a);
        choice = prompt("Enter 'd' if you have Distance and 'v' if you have Final Velocity");        
        switch (choice)
        {
            case 'd':
            {
                d = prompt("Enter distance(d)");
		document.write("Distance: " + d + "<br>");
		d = parseFloat(d);		                
                v = Math.sqrt(u*u + 2*a*d);
                t = (v - u) / a;
		alert("Time = " + t + " Click OK to see summary");
                document.write("Time: " + t + "<br>");
                break;
            }
            case 'v':
            {
                v = prompt("Enter FinalVelocity(v)"); 
		document.write("Final Velocity: " + v + "<br>");
		v = parseFloat(v);               
                t = (v - u) / a;
		alert("Time = " + t + " Click OK to see summary");
                document.write("Time: " + t + "<br>");
                break;
            }            		
        }
	document.write("Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>");
}