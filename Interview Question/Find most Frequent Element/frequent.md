// Find the most frequent Array elements

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


-> frequency  stores counts: {1:1, 2:2, 3:4, 4:1, 6:1}

-> maxCount tracks highest frequency

-> result stores the number with highest frequency