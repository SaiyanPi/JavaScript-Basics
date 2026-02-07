// Find the most frequent Array elements

// const numArray = [1, 2, 4, 3, 2, 3, 6, 3, 3];

// const frequency = numArray.reduce((acc, n) => {
//     acc[n] = ( acc[n] || 0) + 1;
//     return acc
// }, {});

// console.log(frequency); // { '1': 1, '2': 2, '3': 4, '4': 1, '6': 1 }

// let max = 0;
// let mostFrequent = null;

// for (const element in frequency) {
//     if(frequency[element] > max) {
//         max = frequency[element];
//         mostFrequent = Number(element);
//     }
// }

// console.log(mostFrequent)   // 3



const numArray = [1, 2, 4, 3, 2, 3, 6, 3, 3];

function mostFrequentElement(array) {
    let frequency = {};
    let maxCount = 0;
    let result = array[0];

    for(let element of array) {
        frequency[element] = (frequency[element] || 0) + 1;

        if(frequency[element] > maxCount) {
            maxCount = frequency[element];
            result = element;
        }
    }
    return result;
}

console.log(mostFrequentElement(numArray)); // 3