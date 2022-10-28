const { dot } = require("./math.js");
const Matrix = require("./matrix.js");

test("Tests dot product of 1x1 and 1x1 arrays", () => {
    let A = new Matrix(4);
    let B = new Matrix(7);
    let C = new Matrix(28);

    expect(dot(A, B)).toEqual(C);
});


test("Tests dot product of 2x1 and 1x1 arrays", () => {
    let A = new Matrix([[4], [5]]);
    let B = new Matrix(7);
    let C = new Matrix([[28], [35]]);

    expect(dot(A, B)).toEqual(C);
});


test("Tests dot product of 2x2 and 2x1 arrays", () => {
    let A = new Matrix([[4, 5], [7, 8]]);
    let B = new Matrix([[7], [9]]);
    let C = new Matrix([[73], [121]]);

    expect(dot(A, B)).toEqual(C);
});


test("Tests dot product of 2x2 and 2x2 arrays", () => {
    let A = new Matrix([[1, 2], [3, 4]]);
    let B = new Matrix([[5, 6], [7, 8]]);
    let C = new Matrix([[19, 22], [43, 50]]);

    expect(dot(A, B)).toEqual(C);
});