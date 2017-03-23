// Map
var map = new Map();
var key = { name: "Object Key" };
var value = { name: "Object Value" };

// This wouldn't be possible using just an object.
map.set(key, value);
console.log(map.get(key));

// Set
var array = [1,3,5,1,5,5,3];
var uniqueValues = new Set();

array.forEach(value => uniqueValues.add(value));
uniqueValues.forEach((value) => console.log(value));

// Map vs WeakMap
var strongMap = new Map();
var weakMap = new WeakMap();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    strongMap.set(a, 1);
    weakMap.set(b, 2);
})();
