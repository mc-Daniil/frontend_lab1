let Counter = {
    count: 0,
    add(value) {
        this.count += value;
    },
    sub(value) {
        this.count -= value;
    }
}

let action;
let input;
let num;

do {
    action = prompt(`Текущий count = ${Counter.count}\nВыберите действие: add, sub`);

    if (action === null) {
        break;
    }

    action = action.toLowerCase();

    if (!(["add", "sub"].includes(action))) {
        alert("Неизвестная команда");
        continue;
    }

    do {
        input = prompt("Введите число");

        if (input === null) {
            break;
        }
        
        num = Number(input);
        if (isNaN(num)) {
            alert("Это не число");
            continue;
        }
        Counter[action](num);
    } while (isNaN(num));
} while (true)