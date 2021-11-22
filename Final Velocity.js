function FinalVelocity()
{                    
        u = prompt("Enter initial velocity(u)");	
	document.write("Initial Velocity: " + u + "<br>");
	u = parseFloat(u);
        a = prompt("Enter acceleration(a)");
	document.write("Acceleration: " + a + "<br>");
	a = parseFloat(a);
        choice = prompt("Enter 'd' if you have Distance and 't' if you have Time");        
        switch (choice)
        {
            case 'd':
            {
                d = prompt("Enter distance(d)");
		document.write("Distance: " + d + "<br>");
		d = parseFloat(d);		                
                v = Math.sqrt(u*u + 2*a*d);
		document.write("Final Velocity: " + v + "<br>");
                break;
            }
            case 't':
            {
                t = prompt("Enter time(t)"); 
		document.write("Time: " + t + "<br>");
		t = parseFloat(t);               
                v = u + a*t;
		document.write("Final Velocity: " + v + "<br>");
                break;
            }            		
        }
        alert("Final Velocity = " + v + " Click OK to see summary");
	document.write("Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>");
}