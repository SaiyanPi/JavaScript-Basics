// function
export function message() {
    return "Hello World";
}

// object
export const person = {
    fname: "John",
    lname: "Doe",
    age: 30,
    fullName: function() {
        return this.fname + " " + this.lname;
    }
};

// Function expression
const introduce = () => {
    return message() + ", I'm " + person.fullName();
};

export default introduce;
// export { introduce };
// if export { introduce }; then in the import statement we have to use { introduce } instead of introduce.

//     Export                                  Import
// ------------------------------------------------------------------------------------------
//     export { introduce };                   import { introduce } from './message.js';
//     export default introduce;               import introduce from './message.js';