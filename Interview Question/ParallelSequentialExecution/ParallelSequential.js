function delay(time, value) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(value);
        }, time);
    });
}

// console.log(delay(5000,'Hello World!'));

// async function sequentialExecution() { 
//     let a = await delay(1000, 'Hello World');
//     console.log(a);
// } 

// let a = delay(1000, 'Hello World!')
// a.then(function(result) {
//     console.log(result);
// });

// ------------------------ 1️⃣ Sequential Execution ------------------------
async function sequentialExecution() {
    console.time('sequentialExecution');

    let a = await delay(1000, 'Hello World 1');
    let b = await delay(2000, 'Hello World 2');
    let c = await delay(3000, 'Hello World 3');

    console.log(a, b, c);
    console.timeEnd('sequentialExecution');

}

sequentialExecution();


// ------------------------ 2️⃣ Parallel Execution ------------------------
async function parallelExecution() {
    console.time('parallelExecution');

    let a = delay(1000, 'Hello World 1');
    let b = delay(2000, 'Hello World 2');
    let c = delay(3000, 'Hello World 3');

    let results = await Promise.all([a, b, c]);
    console.log(results);
    console.timeEnd('parallelExecution');
}

parallelExecution();