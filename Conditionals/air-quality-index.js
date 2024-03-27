//Logical Operators

// AND = operator && returns true if both conditions are true
let hunger = 5;
let anger = 2;

if (hunger > 4 && anger > 1) {
    console.log("Hangry");
  }
  
// OR = operator || returns true if either condition is true
let coffee = 10;
let bubble_tea = 10;

if (coffee > 0 || bubble_tea > 0) {
    console.log("😊");
  }

// NOT = operator! returns true if the condition is false
tired = false;

if (!tired == true) {
    console.log("Let's code!");
  }

/*Create an air-quality-index.js program.

Google the AQI in your area and define an aqi variable with that number.

Write an if/else if/else statement with the following logic:

    If aqi is between 0 and 50, print “Good”.
    Else if aqi is between 51 and 100, print "Moderate".
    Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
    Else if aqi is between 151 and 200, print "Unhealthy".
    Else if aqi is between 201 and 300, print “Very Unhealthy”.
    Else, print “Hazardous”.*/

    let aqi = 32;

    if (aqi >= 0 && aqi <= 50) {
        console.log("Good");
    } else if (aqi >= 51 && aqi <= 100) {
        console.log("Moderate");
    } else if (aqi >= 101 && aqi <= 150) {
        console.log("Unhealthy (Sensitive Groups)");
    } else if (aqi >= 151 && aqi <= 200) {
        console.log("Unhealthy");
    } else if (aqi >= 201 && aqi <= 300) {
        console.log("Very Unhealthy");
    } else {
        console.log("Hazardous");
    }