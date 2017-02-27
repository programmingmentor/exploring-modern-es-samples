Symbol('foo') !== Symbol('foo'); // local symbols are unique
Symbol.for('foo') === Symbol.for('foo'); // global symbols are identical

// Using symbols as object keys
var someObj = {};
var fooSym = Symbol.for('foo');
var otherSym = Symbol.for('foo');
someObj[fooSym] = 'some value';
someObj[otherSym] = 'other value';
fooSym === otherSym; // same symbols because they are global
someObj[fooSym] === 'other value'; // same symbols behave as same keys
someObj[otherSym] === 'other value';

// Using in different realms
iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);
iframe.contentWindow.Symbol !== Symbol; // local symbols not equal
iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'); // global are equal

// Symbol keyFor
var localFooSymbol = Symbol('foo');
var globalFooSymbol = Symbol.for('foo');
Symbol.keyFor(localFooSymbol) === undefined;
Symbol.keyFor(globalFooSymbol) === 'foo';
Symbol.for(Symbol.keyFor(globalFooSymbol)) === Symbol.for('foo');


