const { dot, add } = require("./math.js");
const Matrix = require("./matrix.js");

test("Tests dot product of 1x1 and 1x1 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix(7),
        C = new Matrix(28),
        D = dot(A, B);

    expect(D).toEqual(C);
});


test("Tests dot product of 1x1 and 1x2 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix([1, 4]),
        C = new Matrix([4, 16]),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 1x1 and 2x1 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix([[1], [4]]),
        C = new Matrix([[4], [16]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 1x1 and 2x2 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix([[1, 2], [3, 4]]),
        C = new Matrix([[4, 8], [12, 16]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 1x2 and 1x1 arrays", () => {
    let A = new Matrix([[1, 2]]),
        B = new Matrix(4),
        C = new Matrix([[4, 8]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});


test("Tests dot product of 2x1 and 1x1 arrays", () => {
    let A = new Matrix([[4], [5]]),
        B = new Matrix(7),
        C = new Matrix([[28], [35]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 2x2 and 1x1 arrays", () => {
    let A = new Matrix([[1, 2], [3, 4]]),
        B = new Matrix(4),
        C = new Matrix([[4, 8], [12, 16]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 1x2 and 2x1 arrays", () => {
    let A = new Matrix([[4, 5]]),
        B = new Matrix([[7], [9]]),
        C = new Matrix(73),
        D = dot(A, B);

    expect(D).toEqual(C);
});

test("Tests dot product of 2x1 and 1x2 arrays", () => {
    let A = new Matrix([[7], [9]]),
        B = new Matrix([4, 5]),
        C = new Matrix([[28, 35], [36, 45]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});


test("Tests dot product of 2x2 and 2x1 arrays", () => {
    let A = new Matrix([[4, 5], [7, 8]]),
        B = new Matrix([[7], [9]]),
        C = new Matrix([[73], [121]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});


test("Tests dot product of 2x2 and 2x2 arrays", () => {
    let A = new Matrix([[1, 2], [3, 4]]),
        B = new Matrix([[5, 6], [7, 8]]),
        C = new Matrix([[19, 22], [43, 50]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});


test("Tests dot product of 3x3 and 3x2 arrays", () => {
    let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
        B = new Matrix([[5, 6], [7, 8], [12, 3]]),
        C = new Matrix([[55, 31], [127, 82], [199, 133]]),
        D = dot(A, B);

    expect(D).toEqual(C);
});



test("Tests dot product of 3x3 and null matrix", () => {
    let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
        B = new Matrix();

    expect(() => dot(A, B)).toThrow("Dot product with null matrix is attempted!");
});



test("Tests dot product of 3x3 and 2x2 matrix", () => {
    let A = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
        B = new Matrix([[1, 2], [4, 5]]);

    expect(() => dot(A, B)).toThrow("Dot product with invalid matrix dimensions is attempted!");
});







///////////////////////







test("Tests addition of 1x1 and 1x1 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix(7),
        C = new Matrix(11),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 1x1 and 1x2 arrays", () => {
    let A = new Matrix(2),
        B = new Matrix([5, 6]),
        C = new Matrix([[7, 8]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 1x1 and 2x1 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix([[5], [6]]),
        C = new Matrix([[9], [10]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 1x1 and 2x2 arrays", () => {
    let A = new Matrix(4),
        B = new Matrix([[5, 6], [7, 8]]),
        C = new Matrix([[9, 10], [11, 12]]),
        D = add(A, B);

    expect(D).toEqual(C);
});


test("Tests addition of 1x2 and 1x1 arrays", () => {
    let A = new Matrix([5, 6]),
        B = new Matrix(2),
        C = new Matrix([[7, 8]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 2x1 and 1x1 arrays", () => {
    let A = new Matrix([[5], [6]]),
        B = new Matrix(4),
        C = new Matrix([[9], [10]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 2x2 and 1x1 arrays", () => {
    let A = new Matrix([[5, 6], [7, 8]]),
        B = new Matrix(4),
        C = new Matrix([[9, 10], [11, 12]]),
        D = add(A, B);

    expect(D).toEqual(C);
});


test("Tests addition of 1x2 and 1x2 arrays", () => {
    let A = new Matrix([[1, 2]]),
        B = new Matrix([5, 6]),
        C = new Matrix([[6, 8]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 2x1 and 2x1 arrays", () => {
    let A = new Matrix([[1], [2]]),
        B = new Matrix([[5], [6]]),
        C = new Matrix([[6], [8]]),
        D = add(A, B);

    expect(D).toEqual(C);
});

test("Tests addition of 2x2 and 2x2 arrays", () => {
    let A = new Matrix([[1, 2], [3, 4]]),
        B = new Matrix([[5, 6], [7, 8]]),
        C = new Matrix([[6, 8], [10, 12]]),
        D = add(A, B);

    expect(D).toEqual(C);
});


test("Tests addition of 1x3 and 1x2 arrays", () => {
    let A = new Matrix([[1, 2, 3]]),
        B = new Matrix([[5, 6, 7]]),
        C = new Matrix([6, 8, 10]),
        D = add(A, B);

    expect(D).toEqual(C);
});


test("Tests addition of 1x3 and null matrix", () => {
    let A = new Matrix([[1, 2, 3]]),
        B = new Matrix();

    expect(() => add(A, B)).toThrow("Summation with null matrix is attempted!");
});


test("Tests addition of 1x3 and 3x1 matrix", () => {
    let A = new Matrix([[1, 2, 3]]),
        B = new Matrix([[1], [2], [3]]);

    expect(() => add(A, B)).toThrow("Summation with invalid matrix dimensions is attempted!");
});

