const Matrix = require("./matrix.js");

test("Tests empty matrix creation", () => {
    let A = new Matrix();
    let B = { val: [[]], dim: [0, 0] };

    expect(A.MAT).toEqual(B);
});

test("Tests 1x1 matrix creation", () => {
    let A = new Matrix(12);
    let B = { val: [[12]], dim: [1, 1] };

    expect(A.MAT).toEqual(B);
});


test("Tests 1x3 matrix transposition", () => {
    let A = new Matrix([1, 2, 3]);
    let B = { val: [[1], [2], [3]], dim: [3, 1] };
    A.transpose();

    expect(A.MAT).toEqual(B);
});

test("Tests 2x2 matrix transposition", () => {
    let A = new Matrix([[1, 2], [3, 4]]);
    let B = { val: [[1, 3], [2, 4]], dim: [2, 2] };
    A.transpose();

    expect(A.MAT).toEqual(B);
});