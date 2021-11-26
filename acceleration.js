function Acceleration() {
                u = prompt("Enter Initial Velocity");
                document.write('<p class = "summary">' + "Initial Velocity: " + u + "<br>" + '</p>');
                v1 = prompt("Do you have the value of final velocity? Enter 'y' for yes and 'n' for no")
                switch (v1) {
                    case "y": case "Y":
                        {
                            v = prompt("Enter Final Velocity");
                            document.write('<p class = "summary">' + "Final Velocity: " + v + "<br>" + '</p>');
                            dt = prompt("Do you have the value of distance or time? Enter 'd' for distance and 't' for time");
                            switch (dt) {
                                case "d": case "D":
                                    {
                                        d = prompt("Enter distance");
                                        document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
                                        finalVelocity = parseFloat(v);
                                        initialVelocity = parseFloat(u);
                                        distance = parseFloat(d);
                                        a = ((finalVelocity * finalVelocity) - (initialVelocity * initialVelocity)) / (2 * distance);
                                        alert("Acceleration is: " + a + "Click OK to see summary");
                                        document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
                                        break;
                                    }
                                case "t": case "T":
                                    {
                                        t = prompt("Enter time");
                                        document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
                                        finalVelocity = parseFloat(v);
                                        initialVelocity = parseFloat(u);
                                        time = parseFloat(t);
                                        a = (finalVelocity - initialVelocity) / time;
                                        alert("Acceleration is: " + a + " Click OK to see summary");
                                        document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
                                        break;
                                    }
                            }
                            break;
                        }
                    case "n": case "N":
                        {
                            d = prompt("Enter distance");
                            document.write('<p class = "summary">' + "Distance: " + d + "<br>" + '</p>');
                            t = prompt("Enter time");
                            document.write('<p class = "summary">' + "Time: " + t + "<br>" + '</p>');
                            distance = parseFloat(d);
                            time = parseFloat(t);
                            initialVelocity = parseFloat(u);
                            a = 2 * (distance - (initialVelocity * time)/(time * time));
                            alert("Acceleration is: " + a + " Click OK to see summary");
                            document.write('<p class = "summary">' + "Acceleration: " + a + "<br>" + '</p>');
                            break;
                        }
                }
                document.write('<p class = "summary">' + "Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>" + '</p>');
                document.write('<div class = "summary">' + "<a href = 'https://sites.google.com/view/educode-inc'> eduCode Inc. </a>" + "<br>" + '</div>');    
}