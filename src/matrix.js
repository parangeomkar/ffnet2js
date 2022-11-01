const { throwError } = require("./error_handler");

class Matrix {
    constructor(X) {
        let _mat = this.toMatrix(X);

        this.val = _mat.val;
        this.dim = _mat.dim;
    }

    /**
     * 
     * @param {*} i row number - starts from 0
     * @param {*} j col number - starts from 0
     * @returns matrix element at i'th row and j'th column
     */
    get(i, j) {
        return this.val[i][j];
    }

    /**
     * transposes MAT property
     */
    transpose() {
        let _mat = [[]];

        for (let i = 0; i < this.val.length; i++) {
            let y = this.val[i];
            for (let j = 0; j < y.length; j++) {
                if (!_mat[j]) {
                    _mat[j] = [];
                }
                _mat[j][i] = y[j];
            }
        }

        this.val = _mat;
        this.dim = [this.dim[1], this.dim[0]];
        return this;
    }

    /**
     * 
     * @param {*} rows number of rows
     * @param {*} cols number of columns
     * @brief sets MAT property as an identity matrix
     */
    identity(rows, cols) {
        this.val = new Array(rows).fill(1).map(() => new Array(cols).fill(1));
        this.dim = [rows, cols];
    }

    /**
     * 
     * @param {*} rows number of rows
     * @param {*} cols number of columns
     * @brief sets MAT property as a zero matrix
     */
    zeros(rows, cols) {
        this.val = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this.dim = [rows, cols];
    }

    /**
     * 
     * @param {*} X Array of matrix elements
     * @returns matrix data structure
     */
    toMatrix(X) {
        let _mat = {}
        if (X != undefined || !isNaN(X)) {
            if (Array.isArray(X)) {
                if (!this.validateDim(X)) {
                    throwError("Number of columns do not match for all rows!");
                }
                if (Array.isArray(X[0])) {
                    let rows = X.length;
                    let cols = X[0].length;

                    _mat.val = X;
                    _mat.dim = [rows, cols];
                } else {
                    let cols = X.length;

                    _mat.val = [X];
                    _mat.dim = [1, cols];
                }
            } else {
                _mat.val = [[X]];
                _mat.dim = [1, 1];
            }
        } else {
            _mat.val = [[]];
            _mat.dim = [0, 0];
        }
        return _mat;
    }

    /**
     * 
     * @param {*} X Array of matrix elements
     * @returns true if the number of elements in each row is same
     */
    validateDim(X) {
        let numElem = null;

        // Check if number of elements in all matrix columns is same
        for (let x of X) {
            if (numElem != null && numElem != x.length) {
                return false;
            } else {
                numElem = x.length;
            }
        }
        return true;
    }
}

module.exports = Matrix;