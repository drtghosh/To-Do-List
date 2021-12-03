function getTheSquare(arrayOfObjects) {
    arrayOfObjects.forEach((entry) => {
        entry[Object.keys(entry)[1]] = Object.values(entry)[0] ** (1 / 2);
    });
    return arrayOfObjects;
}