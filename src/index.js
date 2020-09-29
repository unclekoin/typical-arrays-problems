
exports.min = function min (array) {
    if(array === undefined) return 0;
    if(array.length === 0) return 0;
    
    let minNumber = 0;
    for (let i of array) {
        if(i < minNumber) {
            minNumber = i;
        }
        
    }
    return minNumber
}

exports.max = function max (array) {
    if(array === undefined) return 0;
    if(array.length === 0) return 0;
    
    let maxNumber = 0;
    for (let i of array) {
        if(i > maxNumber) {
            maxNumber = i;
        }
        
    }
    return maxNumber
}

exports.avg = function avg (array) {
    if(array === undefined) return 0;
    if(array.length === 0) return 0;
    
    let sumNumber = 0;
    for (let i of array) {
        sumNumber += i;
    }
    return sumNumber / array.length
}
