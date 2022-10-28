const { dot } = require("./modules/math.js");
const Matrix = require("./modules//matrix.js");

let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
let B = new Matrix([[5, 6], [7, 8], [12, 3]]);

console.log(dot(A, B).MAT)