function loader(value) {
    const promise = new Promise(function(resolve, reject){
        if (value === "true"){
            resolve();
        } else {
            reject();
        }
    });

    return promise.then(function () {
        console.log("The info has loaded.");
    }).catch(function () {
        console.log("Please, try again later.");
    }).finally(function () {
        console.log("Hello, Mr. Smith!");
    });
}