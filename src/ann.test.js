const ANN = require("./ann");
const Matrix = require("./matrix");

test("Tests creation of ANN instance", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 0,
                nInputs: 2,
                layers: []
            }
        };

    expect(A).toEqual(B);
});


test("Tests addition of layer to net without weights and biases", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actTanh,
                    weights: new Matrix([[0, 0], [0, 0]]),
                    biases: new Matrix([[0, 0]])
                }]
            }
        };

    A.addLayer(2, "tansig");

    expect(A).toEqual(B);
});


test("Tests addition of layer to net with Tanh activation", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actTanh,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[4], [5]])
                }]
            }
        };

    A.addLayer(2, "tansig", [[1, 3], [3, 5]], [[4], [5]]);
    expect(A).toEqual(B);
});


test("Tests addition of layer to net with sigmoid activation", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actSigmoid,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[4], [5]])
                }]
            }
        };

    A.addLayer(2, "logsig", [[1, 3], [3, 5]], [[4], [5]]);
    expect(A).toEqual(B);
});


test("Tests addition of layer to net with linear activation", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actLinear,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[4], [5]])
                }]
            }
        };

    A.addLayer(2, "purelin", [[1, 3], [3, 5]], [[4], [5]]);
    expect(A).toEqual(B);
});


test("Tests addition of layer to net with ReLU activation", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actReLU,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[4], [5]])
                }]
            }
        };

    A.addLayer(2, "relu", [[1, 3], [3, 5]], [[4], [5]]);
    expect(A).toEqual(B);
});


test("Tests addition of layer to net with ReLU activation", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actReLU,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[4], [5]])
                }]
            }
        };

    A.addLayer(2, "relu", [[1, 3], [3, 5]], [[4], [5]]);
    expect(A).toEqual(B);
});



test("Tests tanh activation function", () => {
    let A = new ANN(1),
        x = [(2 / (1 + Math.exp(-2 * 5))) - 1, (2 / (1 + Math.exp(-2 * 0.7813))) - 1, (2 / (1 + Math.exp(-2 * 66))) - 1],
        B = new Matrix(x);

    let Y = A.actTanh(new Matrix([5, 0.7813, 66]));
    expect(Y).toEqual(B);
});


test("Tests sigmoid activation function", () => {
    let A = new ANN(1),
        x = [(1 / (1 + Math.exp(-3))), (1 / (1 + Math.exp(-7)))],
        B = new Matrix(x);

    let Y = A.actSigmoid(new Matrix([3, 7]));
    expect(Y).toEqual(B);
});

test("Tests ReLU activation function", () => {
    let A = new ANN(1),
        x = [1, 0, 0],
        B = new Matrix(x);

    let Y = A.actReLU(new Matrix([1, -2, -4.4]));
    expect(Y).toEqual(B);
});


test("Tests linear activation function", () => {
    let A = new ANN(1),
        x = [14, -100, 2003.355],
        B = new Matrix(x);

    let Y = A.actLinear(new Matrix([14, -100, 2003.355]));
    expect(Y).toEqual(B);
});


test("Tests linear activation function", () => {
    let A = new ANN(1),
        x = [14, -100, 2003.355],
        B = new Matrix(x);

    let Y = A.actLinear(new Matrix([14, -100, 2003.355]));
    expect(Y).toEqual(B);
});


test("Tests predictions of a 2 layer neural net with 2 inputs, 3 outputs and 2 hidden neurons", () => {
    let A = new ANN(2),
        B = new Matrix([[691, 661, 1256]]);

    A.addLayer(2, "relu", [[1, 3], [3, 5]], [[4, 5]]);
    A.addLayer(3, "purelin", [[2, 4], [7, 1], [6, 6]], [[3, 8, 2]]);

    expect(A.predict([10, 20])).toEqual(B);
});


test("Tests getting default activation function", () => {
    let A = new ANN(1);

    expect(A.getActivationFun()).toEqual(A.getActivationFun("purelin"));
});


test("Tests setting weights", () => {
    let A = new ANN(2),
        B = {
            net: {
                nLayers: 1,
                nInputs: 2,
                layers: [{
                    nNeurons: 2,
                    nInputs: 2,
                    actFun: A.actReLU,
                    weights: new Matrix([[1, 3], [3, 5]]),
                    biases: new Matrix([[0, 0]])
                }]
            }
        };

    A.addLayer(2, "relu");
    A.setWeights([[1, 3], [3, 5]], 1);

    expect(A).toEqual(B);
});



test("Tests setting biases", () => {
    let A = new ANN(1),
        B = {
            net: {
                nLayers: 1,
                nInputs: 1,
                layers: [{
                    nNeurons: 2,
                    nInputs: 1,
                    actFun: A.actReLU,
                    weights: new Matrix([[0], [0]]),
                    biases: new Matrix([[1, 3]])
                }]
            }
        };

    A.addLayer(2, "relu");
    A.setBiases([[1, 3]], 1);

    expect(A).toEqual(B);
});

test("Tests setting weights on non existing layer", () => {
    let A = new ANN(1);
    A.addLayer(2, "relu");

    expect(() => A.setWeights([[1], [3]], 0)).toThrow("Specified layer does not exist to set weights!");
});


test("Tests setting biases on non existing layer", () => {
    let A = new ANN(1);
    A.addLayer(2, "relu");

    expect(() => A.setBiases([[1], [3]], 2)).toThrow("Specified layer does not exist to set biases!");
});