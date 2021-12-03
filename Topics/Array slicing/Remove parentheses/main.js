function parentheses(string) {
    let result = string.split("").splice(1);
    result.splice(-1);
    return result;
}