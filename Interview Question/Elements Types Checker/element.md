// Check if Array elements are same types:

const ageArray = [21, 23, 43, 19, "30"];
const allSameType = ageArray.every(item => typeof item === 'number');   
console.log(allSameType);   // false


Test Array of numbers:

    const ageArray = [21, 23, 43, 19, "30"];


Check if array items are 'number' with typeof JS operator:

    const allSameType = ageArray.every(item => typeof item === 'number');   

    -> typeof operator returns the type of variable or an expression.
        
        eg: typeof "Hello"      // string
            typeof ("Hello")    // string
            typeof 23           // number
            typeof(2 + 3)       // number
    
    -> type of every array element/item is checked
        if === 'number' returns true 
        else false