// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let fileData;
fs.readFile("./a.txt", "utf-8", function (err, data) {
    if (err) {
        throw err;
    }
    console.log(data);

    fileData = data.replace(/\s+/g, " ").trim(); // Remove extra spaces and trim leading/trailing spaces
    console.log(fileData);

    fs.writeFile("./a.txt", fileData, function (err) {
        if (err) {
            throw err;
        }
        console.log("File cleaned successfully!");
    });
});
