const Matrix = require("./matrix");
const { dot, add } = require("./math");

class ANN {
    constructor(nInputs) {
        this.net = {
            nLayers: 0,
            nInputs,
            layers: []
        };
    }

    /**
     * 
     * @param {*} x a row matrix  
     * @returns a matrix with sigmoid activated values
     */
    actSigmoid(x) {
        let actOut = new Array(x.dim[1]);
        for (let i = 0; i < actOut.length; i++) {
            actOut[i] = (1 / (1 + Math.exp(-x.get(0, i))));
        }
        return new Matrix(actOut);
    }

    /**
     * 
     * @param {*} x a row matrix  
     * @returns same matrix
     */
    actLinear(x) {
        return x;
    }

    /**
     * 
     * @param {*} x a row matrix  
     * @returns a matrix with linearly rectified values
     */
    actReLU(x) {
        let actOut = new Array(x.dim[1]);
        for (let i = 0; i < actOut.length; i++) {
            actOut[i] = x.get(0, i) > 0 ? x.get(0, i) : 0;
        }
        return new Matrix(actOut);
    }


    /**
     * 
     * @param {*} actFun a string defining activation function  
     * @returns returns function corresponding actFun. Default is set to linear
     */
    getActivationFun(actFun) {
        switch (actFun) {
            case "sigmoid":
                return this.actSigmoid;
                break;
            case "linear":
                return this.actLinear;
                break;
            case "relu":
                return this.actReLU;
                break;
            default:
                return this.actLinear;
                break;
        }
    }

    addLayer(nNeurons, activation = "linear", weights = undefined, biases = undefined) {
        let actFun = this.getActivationFun(activation);

        this.net.nLayers += 1;

        let nInputs = this.net.nLayers == 1 ? this.net.nInputs : this.net.layers[this.net.nLayers - 2].nNeurons;

        this.net.layers.push({
            nNeurons,
            nInputs,
            actFun,
            weights,
            biases
        });

        // set weights if provided else initialize as zero
        if (weights) {
            this.setWeights(weights, this.net.nLayers, nNeurons);
        } else {
            this.setWeights(
                new Array(nNeurons).fill(0).map(() => new Array(nInputs).fill(0)),
                this.net.nLayers,
                nNeurons);
        }

        // set biases if provided else initialize as zero
        if (biases) {
            this.setBiases(biases, this.net.nLayers);
        } else {
            this.setBiases(new Array(nNeurons).fill(0), this.net.nLayers);
        }
    }

    setWeights(weights, nLayer, nNeurons = undefined) {
        if (nLayer <= 0) {
            throw new Error("Layer number should be greater than 0!")
        }

        if (weights.length == this.net.layers[nLayer - 1].nNeurons) {
            this.net.layers[nLayer - 1].weights = new Matrix(weights);
            this.net.layers[nLayer - 1].weights.transpose();
        } else {
            throw new Error("Incorrect dimensions for weights!");
        }
    }


    setBiases(biases, nLayer, nNeurons = undefined) {
        if (nLayer <= 0) {
            throw new Error("Layer number should be greater than 0!")
        }

        if (biases.length == this.net.layers[nLayer - 1].nNeurons) {
            this.net.layers[nLayer - 1].biases = new Matrix(biases);
        } else {
            throw new Error("Incorrect dimensions for biases!");
        }
    }

    predict(input) {
        let nextIn = new Matrix(input);

        // iterate for all neurons
        for (let i = 0; i < this.net.nLayers; i++) {
            let currentLayer = this.net.layers[i];
            let sumOfProd = dot(nextIn, currentLayer.weights);

            sumOfProd = add(sumOfProd, currentLayer.biases);
            nextIn = currentLayer.actFun(sumOfProd);
        }
    }
}

module.exports = ANN;