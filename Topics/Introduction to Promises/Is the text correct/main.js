const isCorrectText = true;
let checkingText = new Promise(function(resolve) {
    if (isCorrectText) {
        resolve("Your text is correct");
    }
}
);