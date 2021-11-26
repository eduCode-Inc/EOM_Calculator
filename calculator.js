document.write("<p id = 'beginning'>" + "Welcome to EoM Calculator!" + "<br>" + "Using this, you can calculate any value in the equations of motion!" + "<br>" + "</p>");
document.write("<p id = 'index'>" + "Enter 'a' for acceleration" + "<br>" + "Enter 'u' for initial velocity" + "<br>" + "Enter 'v' for final velocity" + "<br>" + "Enter 't' for time" + "<br>" + "Enter 'd' for distance" + "<br>" + "</p>");
//document.write("Enter which value would you like to calculate: ");
function askInput() {
    chzzzz = prompt("Enter character: ");
    switch(chzzzz) {
        case "a": case "A": case "(a)": case "(A)":
            {
                Acceleration();
                break;
            }
        case "u": case "U": case "(u)": case ("U"):
            {
                initialVelocity();
                break;
            }
        case "v": case "V": case "(v)": case "(V)":
            {
                FinalVelocity();
                break;
            }
        case "t": case "T": case "(t)": case "(T)":
            {
                Time();
                break;
            }
        case "d": case "D": case "(d)": case "(D)":
            {
                Distance();
                break;
            }
        default:
            {
                alert("Unknown error:" + " Please enter a valid character.");
            }
    }
}