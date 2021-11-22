function Acceleration() {
                u = prompt("Enter Initial Velocity");
                document.write("Initial Velocity: " + u + "<br>");
                v1 = prompt("Do you have the value of final velocity? Enter 'y' for yes and 'n' for no")
                switch (v1) {
                    case "y":
                        {
                            v = prompt("Enter Final Velocity");
                            document.write("Final Velocity: " + v + "<br>");
                            dt = prompt("Do you have the value of distance or time? Enter 'd' for distance and 't' for time");
                            switch (dt) {
                                case "d":
                                    {
                                        d = prompt("Enter distance");
                                        document.write("Distance: " + d + "<br>");
                                        finalVelocity = parseFloat(v);
                                        initialVelocity = parseFloat(u);
                                        distance = parseFloat(d);
                                        a = ((finalVelocity * finalVelocity) - (initialVelocity * initialVelocity)) / (2 * distance);
                                        alert("Acceleration is: " + a + "Click OK to see summary");
                                        document.write("Acceleration: " + a);
                                        document.write("Thank for using eduCode's product. To know more about eduCode, click on the link below");
                                        //link left to create
                                        break;
                                    }
                                case "t":
                                    {
                                        t = prompt("Enter time");
                                        document.write("Time: " + t + "<br>");
                                        finalVelocity = parseFloat(v);
                                        initialVelocity = parseFloat(u);
                                        time = parseFloat(t);
                                        a = (finalVelocity - initialVelocity) / time;
                                        alert("Acceleration is: " + a + " Click OK to see summary");
                                        document.write("Acceleration: " + a + "<br>");
                                        document.write("Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>");
                                        break;
                                    }
                            }
                            break;
                        }
                    case "n":
                        {
                            d = prompt("Enter distance");
                            document.write("Distance: " + d + "<br>");
                            t = prompt("Enter time");
                            document.write("Time: " + t + "<br>");
                            distance = parseFloat(d);
                            time = parseFloat(t);
                            initialVelocity = parseFloat(u);
                            a = 2 * (distance - (initialVelocity * time)/(time * time));
                            alert("Acceleration is: " + a + " Click OK to see summary");
                            document.write("Acceleration: " + a + "<br>");
                            document.write("Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>");
                            break;
                        }
                }
}