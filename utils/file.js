const fs = require("fs");
const Print = require("../view/print");
const print = new Print();

module.exports = class File {
    writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                print.err(err);
            }

            print.success("Success! Your README.md file has been generated");
        });
    }
};
