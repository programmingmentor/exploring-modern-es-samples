// General Idea
var genP = new Promise ( (resolve, reject) => {
    // do something, possibly async
    if (everything_is_fine) {
        resolve(result)
    } else {
        reject(error)
    }
});

genP.then(result => console.log(result))
 .catch(error => console.error(error));

// Sample 
var p = new Promise( (resolve, reject) => {
  setTimeout( () => {
    if (Math.random() > 0.5) {
      resolve('OK');
    } else {
      reject('Error!!!');
    }
  }, 1000);  
})

p.then((data) => console.info(data))
 .catch((data) => console.error(data));

// Avoid Hell
fetchBook()
  .then((book) => {
    return formatBook(book)
      .then((book) => {
        return sendBookToPrinter(book);
      });
  });

// Refactoring #1
fetchBook()
  .then((book) => {
    return formatBook(book);
  })
  .then((book) => {
    return sendBookToPrinter(book);
  });

// Refactoring #2
fetchBook()
  .then((book) => formatBook(book))
  .then((book) => sendBookToPrinter(book));

// Refactoring #3
fetchBook()
  .then(formatBook)
  .then(sendBookToPrinter);  