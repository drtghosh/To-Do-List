function newRemove(array, index, n) {
    let newArray = [];
    newArray = newArray.concat(array.slice(0, index));
    newArray = newArray.concat(array.slice(index + n, array.length));
    return newArray;
}