const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (error, first) => {
  if (error) {
    console.log(error);
    return;
  }

  readFile('./content/second.txt', 'utf8', (error, second) => {
    if (error) {
      console.log(error);
      return;
    }

    const result = `Here is the result: ${first}, ${second}`;

    writeFile('./content/result-async.txt', result, (error) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log('The file has been saved!');
    });
  });
});

// In summary, this code reads the contents of two files, combines them into a single string, and writes that string to a new file. If an error occurs at any point, it logs the error and stops execution.