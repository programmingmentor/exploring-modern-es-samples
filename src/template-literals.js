// Single-line string literal
const message = `single-line string literal`;

// Multi-line string literal with html markup
const markup = `<h1>Multi-line</h1>
                <p>string literal</p>`;

const name = 'John';
const age = 42;
console.log(`Hello ${name}, soon you will be ${age + 1}`);
// Hello John, soon you will be 43

function upperArgs(literals, ...values) {
    let result = '';
    const upperVals = values.map(val => val.toUpperCase());
    for (let i = 0; i < upperVals.length; i++) {
        result += literals[i] + upperVals[i];
    }
    result += literals[literals.length - 1];
    return result;
}

const firstName = 'John';
const lastName = 'Smith';
const msg = upperArgs`Hello ${firstName} ${lastName}`;
console.log(msg); // Hello JOHN SMITH

upperArgs(['Hello ', ' ', '!'], 'John', 'Smith');
