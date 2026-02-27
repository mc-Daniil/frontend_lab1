let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
let input;
let num;

do {
    input = prompt("Введите номер месяца");

    if (input === null) {
        break;
    }

    num = Number(input);
    if (isNaN(num)) {
        alert("Это не число!");
    }
    else if (num < 1 || num > 12) {
        alert("Некорректный номер месяца");
    }
    else {
        alert(months[num - 1]);
    }
} while (true)