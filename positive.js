/* CHALLENGE INSTRUCTIONS

Create a function that receives an array of numbers and returns an array containing only the positive numbers

IMPORTANT REMINDER:

Please note that you will need to create a public repository in GitHub and upload it on your GitHub profile.
Once done, please inform the hiring assistant about your progress for our hiring lead to check the code. 

Example:

var array_of_numbers = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

console.log(getPositives(array_of_numbers)) //should return: [10,12,5,90,0,1]

================================================================================================== */

// BOILERPLATE CODE

function getPositives(arr)
{
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arr2 = getPositives(arr);
console.log(`Positive numbers: ${arr2}`); //should return: [10,12,5,90,0,1]