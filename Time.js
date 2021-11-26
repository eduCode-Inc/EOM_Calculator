function Time()
{                    
        u = prompt("Enter initial velocity(u)");	
	document.write('<p class = "summary">' + "Initial Velocity: " + u + "<br>" + '</p>');
	u = parseFloat(u);
        a = prompt("Enter acceleration(a)");
	document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
	a = parseFloat(a);
        choice = prompt("Enter 'd' if you have Distance and 'v' if you have Final Velocity");        
        switch (choice)
        {
            case 'd':
            {
                d = prompt("Enter distance(d)");
		document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
		d = parseFloat(d);		                
                v = Math.sqrt(u*u + 2*a*d);
                t = (v - u) / a;
		alert("Time = " + t + " Click OK to see summary");
                document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
                break;
            }
            case 'v':
            {
                v = prompt("Enter FinalVelocity(v)"); 
		document.write('<p class = "summary">' + "Final Velocity: " + v + "<br>" + '</p>');
		v = parseFloat(v);               
                t = (v - u) / a;
		alert("Time = " + t + " Click OK to see summary");
                document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
                break;
            }            		
        }
        document.write('<p class = "summary">' + "Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>" + '</p>');
        document.write('<div class = "summary">' + "<a href = 'https://sites.google.com/view/educode-inc'> eduCode Inc. </a>" + "<br>" + '</div>');    
}