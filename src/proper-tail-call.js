// Non-PTC factorial
"use strict";
function fact(n) {
    if (n === 0) {
        return 1;
    }
    return n * fact(n - 1);
}

// PTC factorial
"use strict";
function fact(n, acc) {
    if (n === 0) {
        return acc;
    }
    return fact(n - 1, n * acc);
}

export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export expression;
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;