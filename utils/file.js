const fs = require("fs").promises;
const Print = require("../view/print");

const print = new Print();

module.exports = class File {
    async writeToFileAsync(fileName, data) {
        return await fs.writeFile(fileName, data, (err) => {
            if (err) {
                print.err(err);
            }

            print.success("Success! Your README.md file has been generated");
        });
    }
};
