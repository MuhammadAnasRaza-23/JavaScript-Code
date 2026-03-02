// // Name of the user
// var firstName = prompt("Enter your first name");
// var middleName = prompt("Enter your middle name");
// var lastName = prompt("Enter your last name");

// // Age of the user
// var age = +prompt("Enter your age");

// // user personal information
// var email = prompt("Enter your email");
// var phoneNumber = +prompt("Enter your phone number");
// var address = prompt("Enter your address");
// var city = prompt("Enter your city");
// var country = prompt("Enter your country");

// // user educational information
// var highestEducation = prompt("Enter your highest education");
// var universityName = prompt("Enter your university name");

// // user professional information
// var currentJob = prompt("Enter your current job");
// var yearsOfExperience = +prompt("Enter your years of experience");
// var skills = prompt("Enter your skills (comma separated)");

// var fullName = firstName + " " + middleName + " " + lastName;

// document.writeln(
//         "hello " + fullName + " good to meet you, " +
//         "<br> Your age is " + age +
//         "<br> Your email is " + email +
//         "<br> Your phone number is " + phoneNumber +
//         "<br> Your address is " + address +
//         "<br> Your city is " + city +
//         "<br> Your country is " + country +
//         "<br> Your highest education is " + highestEducation +
//         "<br> Your university name is " + universityName +
//         "<br> Your current job is " + currentJob +
//         "<br> Your years of experience is " + yearsOfExperience +
//         "<br> Your skills are " + skills
// )


var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;

document.writeln(
    "The addition of " + num1 + " and " + num2 + " is: " + addition +
    "<br> The subtraction of " + num1 + " and " + num2 + " is: " + subtraction +
    "<br> The multiplication of " + num1 + " and " + num2 + " is: " + multiplication +
    "<br> The division of " + num1 + " and " + num2 + " is: " + division
)
