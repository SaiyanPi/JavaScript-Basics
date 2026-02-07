⚙️ Build the function:

        function isValidDate(dateString) {

            const date = new Date(dateString);  ->  turns a text date into a real JS Date object

            return !isNaN(date.getTime());      -> date.getTime() returns a number representing milliseconds of                                     Date object

                                                -> and check if the returned number is a number (NaN- Not a Number)
        }


    or just :


        function isValidDate(dateString){

            return !NaN(new Date(dateString).Time());
        }



🏹 Invoking the function :

        console.log(isValidDate("2026-02-28")); // true     -> correct format( YYYY - MM - DD )
        console.log(isValidDate("2026-2-28"));  // true
        console.log(isValidDate("2026-28-02")); // false
        console.log(isValidDate("2026-28"));    // false
        console.log(isValidDate("2026-2"));     // true

