let input;

do {
    input = prompt("Введите строку");

    if (input === null) {
        break;
    }

    let str = input.toLowerCase().split(" ").join("");
    let revStr = str.split("").reverse().join("");

    if (str !== "" && str === revStr) {
        alert("Да");
    }
    else {
        alert("Нет");
    }
} while (true);