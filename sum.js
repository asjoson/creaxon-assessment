/* CHALLENGE INSTRUCTIONS

Create a function that will accept an array of numbers that will calculate and return their sum.

IMPORTANT REMINDER:

Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
Once done, please inform the hiring assistant about your progress for our hiring lead to check the code. 

Example:

var array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];

console.log(sumArray(array_of_numbers)) //should return the sum of 145

================================================================================================== */

// BOILERPLATE CODE

function sumArray(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum;
}

let array_of_numbers = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(array_of_numbers);
console.log(`sum of array ${sum}`);
//should return the sum of 145