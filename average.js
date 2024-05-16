/* CHALLENGE INSTRUCTIONS

Create a function that will accept an array of numbers in order to calculate the average of the array of numbers.

IMPORTANT REMINDER:

Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
Once done, please inform the hiring assistant about your progress for our hiring lead to check the code. 

Example:

var array_of_numbers = [1, 3, 9, 15, 90];

console.log(averageArray(array_of_numbers)) //should return: Average: 23.6

================================================================================================== */

// BOILERPLATE CODE

function averageArray(arr) {
    let n = arr.length;
    let sum = 0;
    let average;

    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    average = sum / n;
        
    return average
}

let array_of_numbers = [1, 3, 9, 15, 90];
let avg = averageArray(array_of_numbers);

console.log(`Average: ${avg}`);  //should return: Average: 23.6