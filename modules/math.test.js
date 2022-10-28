const { dot } = require("./math.js");
const Matrix = require("./matrix.js");

test("Tests dot product of 1x1 and 1x1 arrays", () => {
    let A = new Matrix(4);
    let B = new Matrix(7);
    let C = new Matrix(28);

    expect(dot(A, B)).toEqual(C);
});


test("Tests dot product of 1x1 and 1x2 arrays", () => {
    let A = new Matrix(4);
    let B = new Matrix([1, 4]);
    let C = new Matrix([4, 16]);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 1x1 and 2x1 arrays", () => {
    let A = new Matrix(4);
    let B = new Matrix([[1], [4]]);
    let C = new Matrix([[4], [16]]);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 1x1 and 2x2 arrays", () => {
    let A = new Matrix(4);
    let B = new Matrix([[1, 2], [3, 4]]);
    let C = new Matrix([[4, 8], [12, 16]]);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 1x2 and 1x1 arrays", () => {
    let A = new Matrix([[1, 2]]);
    let B = new Matrix(4);
    let C = new Matrix([[4, 8]]);

    expect(dot(A, B)).toEqual(C);
});


test("Tests dot product of 2x1 and 1x1 arrays", () => {
    let A = new Matrix([[4], [5]]);
    let B = new Matrix(7);
    let C = new Matrix([[28], [35]]);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 2x2 and 1x1 arrays", () => {
    let A = new Matrix([[1, 2], [3, 4]]);
    let B = new Matrix(4);
    let C = new Matrix([[4, 8], [12, 16]]);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 1x2 and 2x1 arrays", () => {
    let A = new Matrix([[4, 5]]);
    let B = new Matrix([[7], [9]]);
    let C = new Matrix(73);

    expect(dot(A, B)).toEqual(C);
});

test("Tests dot product of 2x1 and 1x2 arrays", () => {
    let A = new Matrix([[7], [9]]);
    let B = new Matrix([4, 5]);
    let C = new Matrix([[28, 35], [36, 45]]);

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


test("Tests dot product of 3x3 and 3x2 arrays", () => {
    let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    let B = new Matrix([[5, 6], [7, 8], [12, 3]]);    
    let C = new Matrix([[55, 31], [127, 82], [199, 133]]);

    expect(dot(A, B)).toEqual(C);
});
