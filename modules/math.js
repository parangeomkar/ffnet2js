const Matrix = require("./matrix");

const dot = (A, B) => {
    // temp matrix
    let _dotMat = new Matrix();

    // new dims are rows of A and cols of B
    _dotMat.MAT.dim = [A.MAT.dim[0], B.MAT.dim[1]];

    // iterate rows of A
    for (let i = 0; i < A.MAT.dim[0]; i++) {
        let a = A.MAT.val[i];

        // set temp matrix value if undefined
        _dotMat.MAT.val[i] = !_dotMat.MAT.val[i] ? [] : _dotMat.MAT.val[i];
        
        // iterate columns of B
        for (let j = 0; j < B.MAT.dim[1]; j++) {
            let sumOfProducts = 0;

            // iterate rows of B
            for (let k = 0; k < B.MAT.dim[0]; k++) {
                let b = B.MAT.val[k];
                sumOfProducts += (a[k] * b[j]);
            }

            // sum is NaN if dimensions do not match
            if(isNaN(sumOfProducts)){
                throw new Error("Matrix dimensions do not match!");
            }

            _dotMat.MAT.val[i][j] = sumOfProducts;
        }
    }
    return _dotMat;
}

module.exports = {
    dot
}