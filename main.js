//Input/Output: A random number is pre-generated 1-100. 
//User inputs 3 guesses, with each guess a hint will be provided to guess higher or lower. 


const prompt = require('prompt-sync')();

//Initial statement asking for user input.
console.log("I'm a genie, guess my favorite number 1-100 and i will grant you 3 wishes. You have 3 guesses. ")

//Prompts user for the first guess.

let a = Number(prompt("> "));
const b = Number(Math.ceil(Math.random()*100));
let count = 1;



while (count <= 5) {

    if (a === b) {
       console.log("Most excellent guesswork. I shall grant you 3 wishes. ")
       count = 6;
    } else if (a < b) {
        console.log("Nope, try again! Guess higher!!!! ");
        a = Number(prompt("> "));
    } else if (a > b) {
        console.log("Negative, ghostrider. Guess lower!! ");
        a = Number(prompt("> "));
    }

    count++

}











// if (a === b) {
//    console.log(a + "!!" + "Most excellent guesswork. I shall grant you 3 wishes. ")
// } else if (a < b) {
//     while (count <= 2) {
//         console.log(prompt("Nope, try again! Guess higher!! "))
//         count++
//         if (a === b) {
//             console.log(a + "!!" + "Most excellent guesswork. I shall grant you 3 wishes. ")
//         }
//     }
// } else if (a > b) {
//     while (count <= 2) {
//         console.log(prompt("Nope, try again! Guess lower!! "))
//         if (a === b) {
//             console.log(a + "!!" + "Most excellent guesswork. I shall grant you 3 wishes. ")
//         }
//         count++
//     }
// }