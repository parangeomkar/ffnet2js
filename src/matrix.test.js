const Matrix = require("./matrix.js");

test("Tests empty matrix creation", () => {
    let A = new Matrix();
    let B = { val: [[]], dim: [0, 0] };

    expect({ val: A.val, dim: A.dim }).toEqual(B);
});

test("Tests 1x1 matrix creation", () => {
    let A = new Matrix(12);
    let B = { val: [[12]], dim: [1, 1] };

    expect({ val: A.val, dim: A.dim }).toEqual(B);
});


test("Tests 1x3 matrix transposition", () => {
    let A = new Matrix([1, 2, 3]);
    let B = new Matrix([[1], [2], [3]]);
    A.transpose();

    expect(A).toEqual(B);
});

test("Tests 2x2 matrix transposition", () => {
    let A = new Matrix([[1, 2], [3, 4]]);
    let B = new Matrix([[1, 3], [2, 4]]);
    A.transpose();

    expect(A).toEqual(B);
});

test("Tests creation of 2x3 identity matrix", () => {
    let A = new Matrix();
    let B = { val: [[1, 1, 1], [1, 1, 1]], dim: [2, 3] };
    A.identity(2, 3);

    expect(A).toEqual(B);
});


test("Tests creation of 3x2 zero matrix", () => {
    let A = new Matrix();
    let B = { val: [[0, 0], [0, 0], [0, 0]], dim: [3, 2] };
    A.zeros(3, 2);

    expect(A).toEqual(B);
});


test("Tests get function", () => {
    let A = new Matrix([[1, 2, 3], [5, 6, 7]]);

    expect(A.get(0, 2) + A.get(1, 0)).toEqual(8);
});


test("Tests addition of 1x3 and 3x1 matrix", () => {
    expect(() => new Matrix([[1, 2, 3], [4, 5]])).toThrow("Number of columns do not match for all rows!");
});

