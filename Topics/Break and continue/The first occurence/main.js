function find5(numbers) {
    // change it
    let result = -1;
    for (i in numbers) {
        if (numbers[i] === 5) {
            result = i;
            break;
        }
    }
    return result;
}