const axios = require("axios").default;
/**
 * @returns {Promise<any>}
 */
module.exports = async() => {
    return axios({
        method: "GET",
        url: "https://cat-fact.herokuapp.com/facts",
        headers: {
            "Accept": "application/json"
        },
        timeoutErrorMessage: "Sorry, the API took to long to respond. Please Try Again.",
        timeout: 5000,
    }).then(({data}) => {
        return data;
    }).catch((err) => {throw new Error(err)});
};