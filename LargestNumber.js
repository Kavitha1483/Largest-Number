function largest(arr){
    let largerArray = [];
    for(let number of arr){
        let maxNumber = Math.max(...number);
        largerArray.push(maxNumber);
    }
    return largerArray;
}
