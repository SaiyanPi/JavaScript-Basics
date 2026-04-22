// worker.js
onmessage = function(e) {
    var buffer = e.data;
    var sharedArray = new Int32Array(buffer);

    console.log("Worker waiting...");
    var result = Atomics.wait(sharedArray, 0, 0); // wait while value is 0

    console.log("Worker woken, result =", result);
    console.log("New value:", Atomics.load(sharedArray, 0));
};