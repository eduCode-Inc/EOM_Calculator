function Distance()
      
      {
        a=prompt("Enter Acceleration(can also be negative)");
        document.write("Acceleration:"+ a + "<br>")
        a1=prompt("Is your initial velocity non-zero??(y for yes and n for n)");
        switch(a1)
        {
            case("y"):
           {
            u=prompt("Enter Initial Velocity");
            u=parseFloat(u);
            document.write("Initial Velocity:"+ u + "<br>")
           a2 = prompt("Do you have Time or Final velocity?(Enter 't' for time and 'v' for final velocity)");
           
             switch(a2)
            {
             case("t"):
             {
               t=prompt("Enter Time");
               t=parseFloat(t);
               document.write("Time:"+ t + "<br>")
               s=(u*t) + (1.0/2.0 * a * t * t);
               document.write("Distance :"+ s + "<br>")
               alert("Distance = " + s + " Click OK to see summary");
               break;
             }
             case("v"):
             {
                v=prompt("Enter Final Velocity");
                v=parseFloat(v);
                document.write("Final Velocity:"+ v + "<br>")
                s=((v*v) -(u*u))/ 2*a;
                document.write("Distance :"+ s + "<br>")
                alert("Distance = " + s + " Click OK to see summary");
                break;
             }
            }
           }
           break;
              case("n"):
           {
           a2=prompt("Do you have Time or final velocity?(Enter 't' for Time  and 'v' for final velocity)");
            
             switch(a2)
            {
             case("t"):
             {
               t=prompt("Enter Time");
               t=parseFloat(t);
               document.write("Time:"+ t + "<br>")
               s=(1.0/2.0 * a * t * t);
               document.write("Distance :"+ s + "<br>")
               alert("Distance = " + s + " Click OK to see summary");
               break;
             }
             case("v"):
             {
               v=prompt("Enter Final Velocity");
                v=parseFloat(v);
                document.write("Final Velocity:"+ v + "<br>")
                s=(v*v)/ 2*a;
                document.write("Distance :"+ s + "<br>")
                alert("Distance = " + s + " Click OK to see summary");
                break;
             }
             
            }
        }
        break;
    }
        
}         
