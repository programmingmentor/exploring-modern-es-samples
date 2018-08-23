// ------------------------------------------------------
// callback hell
const addOneTo = function(number, callback) {
    const result = number + 1;
    if (callback) {
        callback(result);
    }
}
// 5 + 1 = 6
addOneTo(5, function(res){
    console.log(res);
})
// 5 + 1 + 1 + 1 + 1 + 1 = 10
addOneTo(5, function(res1) {
    addOneTo(res1, function(res2) {
        addOneTo(res2, function(res3) {
            addOneTo(res3, function(res4) {
                addOneTo(res4, function(res5) {
                    console.log(res5);
                });
            });
        });
    });
});

// ------------------------------------------------------
// promises
const addOneTo = function(number) {
    const result = number + 1;
    return new Promise(function(resolve, reject) {
        resolve(result);
    });
}
// 5 + 1 = 6
addOneTo(5)
    .then( res => console.log(res) );
// 5 + 1 + 1 + 1 + 1 + 1 = 10
addOneTo(5)
    .then(addOneTo)
    .then(addOneTo)
    .then(addOneTo)
    .then(addOneTo)
    .then(console.log)

// ------------------------------------------------------
// async/await
const addOneTo = function(number){
    const result = number + 1;
    return new Promise(function(resolve, reject) {
        resolve(result);
    });
}
async function calc(){
    const res1 = await addOneTo(5);
    const res2 = await addOneTo(res1);
    const res3 = await addOneTo(res2);
    const res4 = await addOneTo(res3);
    const res5 = await addOneTo(res4);
    console.log(res5);
}
calc();
