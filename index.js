const ANN = require("./src/ann");
const fs = require("fs");
const path = require("path");

// import matlab JSON exported feedforwardnet
const ffnet = require("./data/multilayernet.json");

// create an instance of neural net
let ann = new ANN(ffnet);

// predict
let outputs = [];
for (let i = -10000; i < 10000; i++) {
    // theta in radians
    let theta = (i / 1000);

    // predict sin(theta) with ann
    let predictdOut = ann.predict(theta);
    outputs.push(predictdOut.get(0, 0));
}

fs.writeFileSync(path.join(__dirname, "out.json"), JSON.stringify(outputs));