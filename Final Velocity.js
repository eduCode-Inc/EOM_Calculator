function FinalVelocity()
{                    
        u = prompt("Enter initial velocity(u)");	
	document.write('<p class = "summary">' + "Initial Velocity: " + u + "<br>" + '</p>');
	u = parseFloat(u);
        a = prompt("Enter acceleration(a)");
	document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
	a = parseFloat(a);
        choice = prompt("Enter 'd' if you have Distance and 't' if you have Time");        
        switch (choice)
        {
            case 'd':
            {
                d = prompt("Enter distance(d)");
		document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
		d = parseFloat(d);		                
                v = Math.sqrt(u*u + 2*a*d);
		document.write('<p class = "summary">' + "Final Velocity: " + v + "<br>" + '</p>');
                break;
            }
            case 't':
            {
                t = prompt("Enter time(t)"); 
		document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
		t = parseFloat(t);               
                v = u + a*t;
		document.write('<p class = "summary">' + "Final Velocity: " + v + "<br>" + '</p>');
                break;
            }            		
        }
        alert("Final Velocity = " + v + " Click OK to see summary");
        document.write('<p class = "summary">' + "Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>" + '</p>');
        document.write('<div class = "summary">' + "<a href = 'https://sites.google.com/view/educode-inc'> eduCode Inc. </a>" + "<br>" + '</div>');
}