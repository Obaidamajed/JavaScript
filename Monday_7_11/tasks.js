
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

let children = prompt("Enter number of your Children");
let partnerName = prompt("Enter your partner name");
let area = prompt("Enter your location");
let job = prompt("Enter your job");

function tellFortune (numOfChildren , nameOfPartner , geoLocation , jobTitle) {
    console.log(`You will be ${jobTitle} in ${geoLocation}, and married to ${nameOfPartner} with ${numOfChildren} kids`);
}

tellFortune(children, partnerName, area, job)

// -----------------------------------------------------

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge (yourPuppyAge) {
//     console.log(`Your doggie is ${yourPuppyAge*7} years old in dog years!`);
// }

// calculateDogAge(16)

// -----------------------------------------------------

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply (age, amountPerDay ) {
//     let resetOfAgePerDay = (100 - age)*365 ;
//     console.log(`You will need ${resetOfAgePerDay*amountPerDay} cups of tea to last you until the ripe old age of 100`);
// }

// calculateSupply( 30 , 2 )

// -----------------------------------------------------

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet("Obaida")

// -----------------------------------------------------

/*
5
what is the error:
function double(cat) {
  return 2 * x; // X is undefined
}

function double(7) { // You cann't use number or string as parameter
  return 2 * 7; 
}

function double('7') { // You cann't use number or string as parameter
  return 2 * 'x';
}
*/

// -----------------------------------------------------

// 6

// function double1(x) {
//   return 2 * x ;
// }

// function double2 (x) {
//     return 2 * x;
// }

// function double3 (x) {
//   return 2 * x;
// }

// -----------------------------------------------------

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

// function cube(number){
//     console.log(Math.pow(number,3));
// }

// cube(4)

// -----------------------------------------------------

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

// function multiply(num1 , num2){
//     console.log(num1*num2);
// }

// multiply(3,9)

// -----------------------------------------------------

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense (age){
//     if ( age < 20 ) {
//         console.log(`please come back after ${20 - age} years to get one`);
//     }else {
//         console.log("yes you can");
//     }
// }

// canIGetADrivingLicense(18)

// -----------------------------------------------------

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength (str1, str2) {
//     if (str1.length === str2.length){
//         console.log(true);
//     }
//     else {
//         console.log(false);
//     }
// }

// sameLength("tree", "clue")

// -----------------------------------------------------
