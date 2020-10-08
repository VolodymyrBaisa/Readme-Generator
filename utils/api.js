const axios = require("axios");
const Print = require("../view/print");

const print = new Print();

module.exports = class API {
    async getUser(userResponses) {
        try {
            return await axios.get(
                `https://api.github.com/users/${userResponses.username}`
            );
        } catch (err) {
            print.err(err);
        }
    }
};
