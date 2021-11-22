function initialVelocity() {
	a = prompt("Enter acceleration")
	document.write("Acceleration: " + a + "<br>");
	v1 = prompt("Do you have the value of final velocity? Enter 'y' for yes and 'n' for no: ");
	switch (v1) {
		case "y":
			{
				v = prompt("Enter final velocity");
				document.write("Final Velocity: " + v + "<br>");
				dt = prompt("Do you have the following Do you have the value of distance or time? Enter 'd' for distance and 't' for time: ");
				switch (dt) {
					case "d":
						{
							d = prompt("Enter the value of distance");
							document.write("Distance: " + d + "<br>");
							a = parseFloat(a);
							v = parseFloat(v);
							d = parseFloat(d);
							u = ((v*v) - (2*a*d));
							alert("Initial Velocity is " + u + " Click OK to see summary.");
							break;
						}
					case "t":
						{
							t = prompt("Enter time");
							document.write("Time: " + t + "<br>");
							t = parseFloat(t);
							a = parseFloat(a);
							v = parseFloat(v);
							u = v - (a*t);
							alert("Initial Velocity is " + u + " Click OK to see summary.");
							document.write("Initial Velocity: " + u + "<br>");
							break;
						}
				}
				break;
			}
		case "n":
			{
				d = prompt("Enter distance");
				document.write("Distance: " + d);
				t = prompt("Enter time");
				document.write("Time: " + t);
				d = parseFloat(d);
				a = parseFloat(a);
				t = parseFloat(t);
				u = (d - (0.5*a*t*t))/t;
				alert("Initial Velocity is: " + u + " Click OK to see summary.");
				document.write("Initial Velocity: " + u + "<br>");
				break;
			}
	}

}