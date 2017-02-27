// Sample arrow function
setTimeout(() => console.log('Hello from arrow function!'), 3000);


// With function expressions we had to catch `this` with separate variable
function Person() {
    var that = this; // here we catch 'this' with variable 'that'
    that.age = 0;

    setInterval(function growUp() {
        that.age++;
    }, 1000);
}

// With arrow functions we don't need to catch this
function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
    }, 1000);
}

var p = new Person();