// Check if Array elements are same types:

const ageArray = [21, 23, 43, 19, "30"];

const allSameType = ageArray.every(item => typeof item === 'number');   

console.log(allSameType);   // false

