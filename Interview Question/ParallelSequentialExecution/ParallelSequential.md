1️⃣ First we define a delay function that returns a promise:

    function delay(time, value) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(value);
            }, time);
        });
    }

2️⃣ If you want to log value('Hello World') using a delay function

    console.log(delay(5000,'Hello World!'));    ❌

    -> This won't work Because:
        👉 delay(...) returns a Promise instantly
        👉 That Promise will resolve later (after 5 sec)
        👉 But console.log runs right now
        so we get something like: Promise { <pending> }
    
    async function sequentialExecution() { 
        let a = await delay(1000, 'Hello World');
        console.log(a); ✅
    } 

    -> This work because:
        👉 await pauses execution
        👉 waits for the Promise to resolve
        👉 extracts the value "Hello World"
        👉 THEN logs it
    or,

    let a = delay(1000, 'Hello World!')
        a.then(function(result) {
        console.log(result);    ✅
    });

    -> This also works because
        👉 a.then(...) run only after Promise resolves

3️⃣ see Chapter 32/section 5/#) Sequential vs Parallel: