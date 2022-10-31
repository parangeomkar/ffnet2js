const Matrix = require("./matrix");
const { throwError } = require("./error_handler");

/**
 * 
 * @param {*} A Matrix 1 of any size
 * @param {*} B Matrix 2 of any size
 * @returns returns dot product of A and B
 */
module.exports.dot = (A, B) => {
    // temp matrix
    let _dotMat = new Matrix();
    let isVectorProduct = 0;

    // check if any matrix is null
    if (A.dim[0] >= 1 && A.dim[1] >= 1 && B.dim[0] >= 1 && B.dim[1] >= 1) {

        if (A.dim[0] == 1 && A.dim[1] == 1) {
            // initialize zero matrix of A->rows and A->columns
            _dotMat.zeros(B.dim[0], B.dim[1]);

        } else if (B.dim[0] == 1 && B.dim[1] == 1) {
            // initialize zero matrix of B->rows and B->columns
            _dotMat.zeros(A.dim[0], A.dim[1]);

            // swap A and B to allow sequence of scaler param first in multiplication
            let _mat = B;

            B = A;
            A = _mat;

        } else {
            // vector product
            isVectorProduct = 1;


            // dimensions do not match if columns of first matrix do not match rows of second matrix,
            if (A.dim[1] != B.dim[0]) {
                throwError("Dot product with invalid matrix dimensions is attempted!");
            } else {
                // initialize zero matrix of A->rows and B->columns
                _dotMat.zeros(A.dim[0], B.dim[1]);
            }

        }
    } else {
        throwError("Dot product with null matrix is attempted!");
    }

    // iterate rows of A and multiply with columns of B
    for (let i = 0; i < A.dim[0]; i++) {
        // select row of A matrix
        let a = A.val[i];

        // iterate columns of B
        for (let j = 0; j < B.dim[1]; j++) {

            // iterate rows of B
            for (let k = 0; k < B.dim[0]; k++) {
                // select column of A matrix
                let b = B.val[k];

                if (isVectorProduct) {
                    _dotMat.val[i][j] += (a[k] * b[j]);
                } else {
                    _dotMat.val[k][j] = (a[0] * b[j]);
                }
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
module.exports.add = (A, B) => {
    // temp matrix
    let _sumMat = new Matrix();
    let isVectorSum = 0;

    // check if any matrix is null
    if (A.dim[0] >= 1 && A.dim[1] >= 1 && B.dim[0] >= 1 && B.dim[1] >= 1) {

        if (A.dim[0] == 1 && A.dim[1] == 1) {
            // initialize zero matrix of A->rows and A->columns
            _sumMat.zeros(B.dim[0], B.dim[1]);

        } else if (B.dim[0] == 1 && B.dim[1] == 1) {
            // initialize zero matrix of B->rows and B->columns
            _sumMat.zeros(A.dim[0], A.dim[1]);

            // swap A and B to allow sequence of scaler param first in multiplication
            let _mat = B;
            B = A;
            A = _mat;

        } else {
            // dimensions do not match if columns of first matrix do not match rows of second matrix,
            if (A.dim[0] != B.dim[0] && A.dim[1] != B.dim[1]) {
                throwError("Summation with invalid matrix dimensions is attempted!");
            } else {
                // vector product
                isVectorSum = 1;

                // initialize zero matrix of A->rows and B->columns
                _sumMat.zeros(A.dim[0], B.dim[1]);
            }
        }
    } else {
        throwError("Summation with null matrix is attempted!");
    }

    // iterate rows of A and multiply with columns of B
    for (let i = 0; i < B.dim[0]; i++) {
        for (let j = 0; j < B.dim[1]; j++) {
            if (isVectorSum) {
                _sumMat.val[i][j] = A.val[i][j] + B.val[i][j];
            } else {
                _sumMat.val[i][j] = A.val[0][0] + B.val[i][j];
            }
        }
    }
    return _sumMat;
}