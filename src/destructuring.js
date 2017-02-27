var var1, var2, rest;
[var1, var2] = [1, 2];
console.log(var1); // 1
console.log(var2); // 2

[var1, var2, ...rest] = [1, 2, 3, 4, 5];
console.log(var1); // 1
console.log(var2); // 2
console.log(rest); // [3, 4, 5]


let a = 1, b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1


// Destructuring objects
const obj = { first: 'John', last: 'Smith' };
const {first: fst, last: lst} = obj; // fst = 'John'; lst = 'Smith'

// Compact syntax: {prop} is short for {prop: prop}
const {first, last} = obj; // first = 'John'; last = 'Smith'

// Note that destructuring can't start with curly brace '{', because according
// to syntax of the language it starts new block. To overcome this limitation,
// we need to convert destructuring to expression by surrounding with round brace '('
let firstname, surname;
({firstname, surname} = {firstname: 'Adam', surname: 'Brown'});
// firstname: 'Adam', surname: 'Brown'


// Providing default values for function parameters
function random ({ min=1, max=300 }) {
    return Math.floor(Math.random() * (max - min)) + min
}
console.log(random({})); // <- 123
console.log(random({max: 24})); // <- 15


function getUrlParts (url) {
    var magic = /^(https?):\/\/(ponyfoo\.com)(\/articles\/([a-z0-9-]+))$/
    return magic.exec(url)
}
var parts = getUrlParts('http://ponyfoo.com/articles/es6-destructuring-in-depth')
var [,protocol,host,pathname,slug] = parts
console.log(protocol)
// <- 'http'
console.log(host)
// <- 'ponyfoo.com'
console.log(pathname)
// <- '/articles/es6-destructuring-in-depth'
console.log(slug)
// <- 'es6-destructuring-in-depth'

// Destructure function return value
function f() {
    return [1, 2];
}
let retA, retB;
[retA, retB] = f();
console.log(retA); // 1
console.log(retB); // 2


const url = "https://example.com/some/path";
const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
console.log(parsedURL.toString()); // https://example.com/some/path,https,example.com,some/path
const [, protocol, fullhost, fullpath] = parsedURL;
console.log(protocol); // "https"
console.log(fullhost); // example.com
console.log(fullpath); // some/path
