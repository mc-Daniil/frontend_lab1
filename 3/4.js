function checkBrackets(input) {
    let stack = [];

    for (let c of input) {
        if (c === "(") {
            stack.push(c);
        }
        else if (c === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

do {
    let input = prompt("Введите скобочную последовательность");

    if (input === null) {
        break;
    }

    if (checkBrackets(input)) {
        alert("Правильная");
    }
    else {
        alert("Неправильная");
    }
} while (true);