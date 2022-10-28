const Matrix = require("./matrix");

/**
 * 
 * @param {*} A Matrix 1 of any size
 * @param {*} B Matrix 2 of any size
 * @returns returns dot product of A and B
 */
const dot = (A, B) => {
    // temp matrix
    let _dotMat = new Matrix();
    let isVectorProduct = 0;

    // check if any matrix is null
    if (A.MAT.dim[0] >= 1 && A.MAT.dim[1] >= 1 && B.MAT.dim[0] >= 1 && B.MAT.dim[1] >= 1) {

        if (A.MAT.dim[0] == 1 && A.MAT.dim[1] == 1) {
            // initialize zero matrix of A->rows and A->columns
            _dotMat.zeros(B.MAT.dim[0], B.MAT.dim[1]);

        } else if (B.MAT.dim[0] == 1 && B.MAT.dim[1] == 1) {
            // initialize zero matrix of B->rows and B->columns
            _dotMat.zeros(A.MAT.dim[0], A.MAT.dim[1]);

            // swap A and B to allow sequence of scaler param first in multiplication
            let temp = B;
            B = A;
            A = temp;

        } else {
            // vector product
            isVectorProduct = 1;

            // initialize zero matrix of A->rows and B->columns
            _dotMat.zeros(A.MAT.dim[0], B.MAT.dim[1]);
        }
    } else {
        throw new Error("Dot product with null matrix is attempted");
    }

    // iterate rows of A and multiply with columns of B
    for (let i = 0; i < A.MAT.dim[0]; i++) {
        // select row of A matrix
        let a = A.MAT.val[i];

        // iterate columns of B
        for (let j = 0; j < B.MAT.dim[1]; j++) {

            // iterate rows of B
            for (let k = 0; k < B.MAT.dim[0]; k++) {
                // select column of A matrix
                let b = B.MAT.val[k];

                if (isVectorProduct) {
                    _dotMat.MAT.val[i][j] += (a[k] * b[j]);
                } else {
                    _dotMat.MAT.val[k][j] = (a[0] * b[j]);
                }
            }

            // sum is NaN if dimensions do not match
            if (isNaN(_dotMat.MAT.val[i][j])) {
                throw new Error("Matrix dimensions do not match!");
            }
        }
    }
    return _dotMat;
}



/**
 * 
 * @param {*} A Matrix 1 of any size
 * @param {*} B Matrix 2 of any size
 * @returns returns sum of A and B
 */
const add = (A, B) => {
    // temp matrix
    let _sumMat = new Matrix();
    let isVectorSum = 0;

    // check if any matrix is null
    if (A.MAT.dim[0] >= 1 && A.MAT.dim[1] >= 1 && B.MAT.dim[0] >= 1 && B.MAT.dim[1] >= 1) {

        if (A.MAT.dim[0] == 1 && A.MAT.dim[1] == 1) {
            // initialize zero matrix of A->rows and A->columns
            _sumMat.zeros(B.MAT.dim[0], B.MAT.dim[1]);

        } else if (B.MAT.dim[0] == 1 && B.MAT.dim[1] == 1) {
            // initialize zero matrix of B->rows and B->columns
            _sumMat.zeros(A.MAT.dim[0], A.MAT.dim[1]);

            // swap A and B to allow sequence of scaler param first in multiplication
            let temp = B;
            B = A;
            A = temp;

        } else {
            // vector product
            isVectorSum = 1;

            // initialize zero matrix of A->rows and B->columns
            _sumMat.zeros(A.MAT.dim[0], B.MAT.dim[1]);
        }
    } else {
        throw new Error("Dot product with null matrix is attempted");
    }

    // iterate rows of A and multiply with columns of B
    for (let i = 0; i < B.MAT.dim[0]; i++) {
        for (let j = 0; j < B.MAT.dim[1]; j++) {
            if (isVectorSum) {
                _sumMat.MAT.val[i][j] = A.MAT.val[i][j] + B.MAT.val[i][j];
            } else {
                _sumMat.MAT.val[i][j] = A.MAT.val[0][0] + B.MAT.val[i][j];
            }

            // sum is NaN if dimensions do not match
            if (isNaN(_sumMat.MAT.val[i][j])) {
                throw new Error("Matrix dimensions do not match!");
            }
        }
    }
    return _sumMat;
}
module.exports = {
    dot,
    add
}