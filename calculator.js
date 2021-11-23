document.write("<p id = 'beginning'>" + "Welcome to EoM Calculator!" + "<br>" + "Using this, you can calculate any value in the equations of motion!" + "<br>" + "</p>");
document.write("<p id = 'index'>" + "Enter 'a' for acceleration" + "<br>" + "Enter 'u' for initial velocity" + "<br>" + "Enter 'v' for final velocity" + "<br>" + "Enter 't' for time" + "<br>" + "Enter 'd' for distance" + "<br>" + "</p>");
//document.write("Enter which value would you like to calculate: ");
function askInput() {
    chzzzz = prompt("Enter character: ");
    switch(chzzzz) {
        case "a":
            {
                Acceleration();
                break;
            }
        case "u":
            {
                initialVelocity();
                break;
            }
        case "v":
            {
                FinalVelocity();
                break;
            }
        case "t":
            {
                Time();
                break;
            }
        case "d":
            {
                Distance();
                break;
            }
    }
}