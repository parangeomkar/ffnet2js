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

test("Tests creation of 2x3 identity matrix", () => {
    let A = new Matrix();
    let B = { val: [[1, 1, 1], [1, 1, 1]], dim: [2, 3] };
    A.identity(2, 3);

    expect(A.MAT).toEqual(B);
});


test("Tests creation of 3x2 zero matrix", () => {
    let A = new Matrix();
    let B = { val: [[0, 0], [0, 0], [0, 0]], dim: [3, 2] };
    A.zeros(3, 2);

    expect(A.MAT).toEqual(B);
});