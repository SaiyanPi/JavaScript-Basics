 
//  Check If Date is valid

function isValidDate(dateString) {
    // const date = new Date(dateString);
    // return !isNaN(date.getTime());

    return !isNaN(new Date(dateString).getTime());
}


console.log(isValidDate("2026-02-28")); // true
console.log(isValidDate("2026-2-28"));  // true
console.log(isValidDate("2026-28-02")); // false
console.log(isValidDate("2026-28"));    // false
console.log(isValidDate("2026-2"));     // true