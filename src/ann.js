const { Matrix, dot, add } = require("vector-math-js");

class ANN {
    constructor(ffnet) {
        this.net = {};
        this.buildNet(ffnet);
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
     * @returns a matrix with hyperbolic tangent activated values
     */
    actTanh(x) {
        let actOut = new Array(x.dim[1]);
        for (let i = 0; i < actOut.length; i++) {
            actOut[i] = (2 / (1 + Math.exp(-2 * x.get(0, i)))) - 1;
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
        let activationFn = this.actLinear;

        switch (actFun) {
            case "purelin":
                activationFn = this.actLinear;
                break;
            case "relu":
                activationFn = this.actReLU;
                break;
            case "logsig":
                activationFn = this.actSigmoid;
                break;
            case "tansig":
                activationFn = this.actTanh;
                break;
            default:
                activationFn = this.actLinear;
                break;
        }
        return activationFn;
    }

    /**
     * 
     * @param {*} nNeurons number of neurons in the layer
     * @param {*} activation type of activation function - linear, sigmoid, relu, tanh
     * @param {*} weights 
     * @param {*} biases 
     */
    addLayer(nNeurons, activation = "linear", weights = undefined, biases = undefined) {
        let actFun = this.getActivationFun(activation);

        this.net.nLayers += 1;

        let nInputs = this.net.nLayers == 1 ? this.net.nInputs : this.net.layers[this.net.nLayers - 2].nNeurons;

        this.net.layers.push({
            nNeurons,
            nInputs,
            actFun
        });

        // set weights if provided else initialize as zero
        if (weights) {
            this.setWeights(weights, this.net.nLayers);
        } else {
            this.setWeights(
                new Array(nNeurons).fill(0).map(() => new Array(nInputs).fill(0)),
                this.net.nLayers);
        }

        // set biases if provided else initialize as zero
        if (biases) {
            this.setBiases(biases, this.net.nLayers);
        } else {
            this.setBiases(new Array(nNeurons).fill(0), this.net.nLayers);
        }
    }

    /**
     * 
     * @param {*} weights array of weights
     * @param {*} nLayer number of layers in the neural network
     */
    setWeights(weights, nLayer) {
        let thisLayer = nLayer - 1;
        if (!this.net.layers[thisLayer]) {
            throw new Error("Specified layer does not exist to set weights!")
        }

        // if (weights.length == this.net.layers[nLayer - 1].nInputs) {
        this.net.layers[nLayer - 1].weights = new Matrix(weights);
        // } else {
        //     throw new Error("Incorrect dimensions for weights!");
        // }
    }


    /**
     * 
     * @param {*} biases array of biases
     * @param {*} nLayer number of layers in the neural network
     */
    setBiases(biases, nLayer) {
        if (!this.net.layers[nLayer - 1]) {
            throw new Error("Specified layer does not exist to set biases!")
        }

        // if (biases.length == this.net.layers[nLayer - 1].nNeurons) {
        this.net.layers[nLayer - 1].biases = new Matrix(biases);
        // } else {
        //     throw new Error("Incorrect dimensions for biases!");
        // }
    }

    /**
     * 
     * @param {*} ffnet JSON encoded matlab neural network
     */
    buildNet(ffnet) {
        let WEIGHTS = [...ffnet.IW, ...ffnet.LW];
        let BIASES = ffnet.b;
        let idx = 0;

        this.net = {
            nLayers: 0,
            nInputs: ffnet.numInputs,
            layers: [],
            inputGain: new Matrix(ffnet.inputs[0].processSettings[0].gain),
            outputGain: new Matrix(ffnet.outputs[ffnet.numLayers - 1].processSettings[0].gain)
        }

        for (let weight of WEIGHTS) {
            // Matlab stores weights as diagonal matrix resulting in JSON encoded net object
            // to have several empty weight arrays which are off-diagonal elements
            if (weight.length) {
                // for n hidden neurons with 1 input, weight matrix is a row matrix
                // following logic converts it to
                if (!Array.isArray(weight[0]) && ffnet.layers[idx].dimensions != 1) {
                    weight = weight.map(w => [w]);
                }

                this.addLayer(ffnet.layers[idx].dimensions, ffnet.layers[idx].transferFcn, weight, BIASES[idx]);
                idx++;
            }
        }
    }

    /**
     * 
     * @param {*} input array of inputs
     * @returns matrix of predicted outputs
     */
    predict(input) {
        let nextIn = dot(new Matrix(input), this.net.inputGain);

        // iterate for all neurons
        for (let i = 0; i < this.net.nLayers; i++) {
            let currentLayer = this.net.layers[i];

            let sumOfProd = dot(currentLayer.weights, nextIn.transpose());
            sumOfProd = add(sumOfProd.transpose(), currentLayer.biases);

            nextIn = currentLayer.actFun(sumOfProd);
        }
        return dot(nextIn, this.net.outputGain);
    }
}


module.exports = ANN;