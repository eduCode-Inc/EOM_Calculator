function initialVelocity() {
	a = prompt("Enter acceleration")
	document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
	v1 = prompt("Do you have the value of final velocity? Enter 'y' for yes and 'n' for no: ");
	switch (v1) {
		case 'y': case 'Y': case '(y)': case '(Y)':
			{
				v = prompt("Enter final velocity");
				document.write('<p class = "summary">' + "Final Velocity: " + v + "<br>" + '</p>');
				dt = prompt("Do you have the value of distance or time? Enter 'd' for distance and 't' for time: ");
				switch (dt) {
					case 'd': case 'D': case '(d)': case '(D)':
						{
							d = prompt("Enter the value of distance");
							document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
							a = parseFloat(a);
							v = parseFloat(v);
							d = parseFloat(d);
							u = ((v*v) - (2*a*d));
							alert("Initial Velocity is " + u + " Click OK to see summary.");
							break;
						}
					case 't': case 'T': case '(t)': case '(T)':
						{
							t = prompt("Enter time");
							document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
							t = parseFloat(t);
							a = parseFloat(a);
							v = parseFloat(v);
							u = v - (a*t);
							alert("Initial Velocity is " + u + " Click OK to see summary.");
							document.write('<p class = "summary">' + "Velocity: " + v + "<br>" + '</p>');
							break;
						}
				}
				break;
			}
		case 'n': case 'N': case '(n)': case '(N)':
			{
				d = prompt("Enter distance");
				document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
				t = prompt("Enter time");
				document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
				d = parseFloat(d);
				a = parseFloat(a);
				t = parseFloat(t);
				u = (d - (0.5*a*t*t))/t;
				alert("Initial Velocity is: " + u + " Click OK to see summary.");
				document.write('<p class = "summary">' + "Initial Velocity: " + u + "<br>" + '</p>');
				break;
			}
	}
	document.write('<p class = "summary">' + "Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>" + '</p>');
    document.write('<div class = "summary">' + "<a href = 'https://sites.google.com/view/educode-inc'> eduCode Inc. </a>" + "<br>" + '</div>');    
	document.write('<p class = "summary">' + "Had problems with the product? Contact customer service now: " + '<a href = "mailto: educode2021@outlook.com">' + "Click Here" + '</a>' + "</p>");
}