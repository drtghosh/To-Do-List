const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((remSalary, expense) => {
        return remSalary - expense;
    }, salary);
    console.log(remainingSalary);
}