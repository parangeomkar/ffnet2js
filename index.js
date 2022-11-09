const ANN = require("./src/ann");

module.exports.ffnet2js = (ffnet) => {
    return new ANN(ffnet);
}