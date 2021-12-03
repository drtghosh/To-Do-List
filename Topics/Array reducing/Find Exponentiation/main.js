function calculateExp(numbers){
    numbers.reverse();
    let result = numbers.reduce((a, power) => {
        return power ** a;
    });
    console.log(result);
}