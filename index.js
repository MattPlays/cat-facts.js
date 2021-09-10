const fetch = require("node-fetch");
/**
 * @returns {Promise<any>}
 */
module.exports = async() => {
    return fetch("https://cat-fact.herokuapp.com/facts", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((data) => {return data}).catch((err) => {throw new Error(err)})
};