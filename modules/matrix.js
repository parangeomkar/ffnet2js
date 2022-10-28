class Matrix {
    constructor(X) {
        this.MAT = this.toMatrix(X);
    }

    transpose() {
        let _mat = this.MAT;
        let x = this.MAT.val;
        let tempMat = [[]];

        if (Array.isArray(x[0])) {
            for (let i = 0; i < x.length; i++) {
                let y = x[i];
                for (let j = 0; j < y.length; j++) {
                    if (!tempMat[j]) {
                        tempMat[j] = [];
                    }
                    tempMat[j][i] = y[j];
                }
            }
        }

        _mat.val = tempMat;
        _mat.dim = [_mat.dim[1], _mat.dim[0]];

        this.MAT = _mat;
    }

    identity(rows, cols) {
        this.MAT.val = new Array(rows).fill(1).map(() => new Array(cols).fill(1));
        this.MAT.dim = [rows, cols];
    }

    zeros(rows, cols) {
        this.MAT.val = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
        this.MAT.dim = [rows, cols];
    }

    toMatrix(X) {
        let mat = {}
        if (X != undefined || !isNaN(X)) {
            if (Array.isArray(X)) {
                if (!this.validateDim(X)) {
                    throw new Error("Number of columns do not match for all rows!");
                }
                if (Array.isArray(X[0])) {
                    let rows = X.length;
                    let cols = X[0].length;

                    mat.val = X;
                    mat.dim = [rows, cols];
                } else {
                    let cols = X.length;

                    mat.val = [X];
                    mat.dim = [1, cols];
                }
            } else {
                mat.val = [[X]];
                mat.dim = [1, 1];
            }
        } else {
            mat.val = [[]];
            mat.dim = [0, 0];
        }
        return mat;
    }

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