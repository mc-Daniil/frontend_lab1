function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); ++i) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

let num;
let input;
let res = [];

do {
    input = prompt("Введите число");

    if (input === null) {
        break;
    }

    num = Number(input);
    if (isNaN(num)) {
        alert("Это не число!");
    }
    else if (num < 1) {
        alert("Число - не натурал");
    }
    else {
        let current = 2;
        while (num > 0) {
            if (isPrime(current)) {
                res.push(current);
                --num;
            }
            ++current;
        }
        alert(res.join(" "))
        res = []
    }
} while (true)