function Distance()
      
      {
        a=prompt("Enter Acceleration(can also be negative)");
        document.write('<p class = "summary">' + "Acceleration:"+ a + "<br>" + '</p>');
        a1=prompt("Is your initial velocity zero??(y for yes and n for n)");
        switch(a1)
        {
            case("y"): case ("Y"): case ("(y)"): case ("(Y)"):
           {
            a2=prompt("Do you have Time or final velocity?(Enter 't' for Time  and 'v' for final velocity)");
            
            switch(a2)
           {
            case("t"): case ("T"): case ("(t)"): case ("(T)"):
            {
              t=prompt("Enter Time");
              t=parseFloat(t);
              document.write('<p class = "summary">' + "Time: "+ t + "<br>" + '</p>');
              s=(1.0/2.0 * a * t * t);
              document.write('<p class = "summary">' + "Distance: "+ s + "<br>" + '</p>');
              alert("Distance = " + s + " Click OK to see summary");
              break;
            }
            case("v"): case ("V"): case ("(v)"): case ("(V)"):
            {
              v=prompt("Enter Final Velocity");
               v=parseFloat(v);
               document.write('<p class = "summary">' + "Final Velocity:"+ v + "<br>" + '</p>');
               s=(v*v)/ 2*a;
               document.write('<p class = "summary">' + "Distance: "+ s + "<br>" + '</p>');
               alert("Distance = " + s + " Click OK to see summary");
               break;
            }
            
           }            
           }
           break;
              case("n"): case("N"): case ("(n)"): case ("(N)"):
           {
            u=prompt("Enter Initial Velocity");
            u=parseFloat(u);
            document.write('<p class="summary">' + "Initial Velocity:"+ u + "<br>" + '</p>');
           a2 = prompt("Do you have Time or Final velocity?(Enter 't' for time and 'v' for final velocity)");
           
             switch(a2)
            {
             case("t"): case ("T"): case ("(t)"): case ("(T)"):
             {
               t=prompt("Enter Time");
               t=parseFloat(t);
               document.write('<p class = "summary">' + "Time: "+ t + "<br>" + '</p>');
               s=(u*t) + (1.0/2.0 * a * t * t);
               document.write('<p class = "summary">' + "Distance: "+ s + "<br>" + '</p>');
               alert("Distance = " + s + " Click OK to see summary");
               break;
             }
             case("v"): case("V"): case("(v)"): case("(V)"):
             {
                v=prompt("Enter Final Velocity");
                v=parseFloat(v);
                document.write('<p class = "summary">' + "Final Velocity:"+ v + "<br>" + '</p>');
                s=((v*v) -(u*u))/ 2*a;
                document.write('<p class = "summary">' + "Distance: "+ s + "<br>" + '</p>');
                alert("Distance = " + s + " Click OK to see summary");
                break;
             }
            }
        }
        break;
    }
    document.write('<p class = "summary">' + "Thank for using eduCode's product. To know more about eduCode, click on the link below" + "<br>" + '</p>');
    document.write('<div class = "summary">' + "<a href = 'https://sites.google.com/view/educode-inc'> eduCode Inc. </a>" + "<br>" + '</div>');    
}         
