//====TEMPERATURE CONVERTER====

function convertCelsiusToFahrenheit(){
    let celsius = parseFloat(prompt("Enter The temperature in Celsius: "));
    let temp_in_fahrenheit = ((celsius * 1.8)+32).toFixed(2);
    alert("The temperature in Fahrenheit is: "+temp_in_fahrenheit);
}


//====LONGER WORD====	
function getLongerWord(){
let word1 = prompt("Enter word 1: ");
let word2 = prompt("Enter word 2: ");

if (word1.length > word2.length)
{
    alert("The longer word is: "+word1);
}
else if (word1.length < word2.length)
{
    alert("The longer word is: "+word2);
}
else
{
    alert("They are equal");    
}
}


//====BIRTHSTONE====



function showUserBirthStone(){

let birthmonth = prompt("Enter Birth Month:").toUpperCase();

    switch(birthmonth){
        case "JANUARY":
            alert("Your birthstone is GARNET");
            break;
        case "FEBRUARY":
            alert("Your birthstone is AMETHYST");
            break;
        case "MARCH":
            alert("Your birthstone is AQUAMARINE");
            break;
        case "APRIL":
            alert("Your birthstone is DIAMOND");
            break;
        case "MAY":
            alert("Your birthstone is EMERAMLD");
            break;
        case "JUNE":
            alert("Your birthstone are ALEXANDRITE & PEARL");
            break;
        case "JULY":
            alert("Your birtstone is RUBY");
            break;
        case "AUGUST":
            alert("Your birthstone is PERIDOT");
            break;
        case "SEPTEMBER":
            alert("Your birthstone is SAPPHIRE");
            break;
        case "OCTOBER":
            alert("Your birthstone are OPAL & Tourmaline");
            break;
        case "NOVEMBER":
            alert("Your birthstone are CITRINE & TOPAZ");
            break;
        case "DECEMBER":
            alert("Your birthstone are BLUE ZICRON, TURQUOISE, & TANZANITE");
            break;
        default:
            alert("INVALID BIRTH MONTH!!!!");
            break;
            
    }
}




//====BASIC OPERATORS====

function BasicMathOps(){
    let operators = prompt("Choose an operator: \nM - Multiplication (*)\nD - Division (/)\nA - Addition (+)\nS - Subtraction (-)").trim().toUpperCase();
    let num1 = parseInt(prompt("Enter num 1: "));
    let num2 = parseInt(prompt("Enter num 2: "));
    let total;
    switch(operators){
        case 'M':
            total = num1 * num2;
            alert(`Multiplying ${num1} by ${num2} is: ${total}`);
            break;
        case 'D':
            total = num1 / num2;
            alert(`Dividing ${num1} by ${num2} is: ${total}`);
            break;
        case 'A':
            total = num1 + num2;
            alert(`Adding ${num1} by ${num2} is ${total}`);
            break;
        case 'S':
            total = num1 - num2;
            alert(`Subtracting ${num1} by ${num2} is: ${total}`);
            break;
        default:
	    alert("Invalid Input");
    }
}



//====COMPUTE ACCELERATION====

function ComputeAcceleration(){
    let initialVelocity = parseFloat(prompt("Enter the inital velocity m/s: "));
    let finalVelocity = parseFloat(prompt("Enter the Final velocity m/s: "));
    let changeInTime = parseFloat(prompt("Enter the change in time in seconds: "));

    let acceleration = (finalVelocity - initialVelocity) / changeInTime;
    alert("Acceleration: " + acceleration);
    
}



