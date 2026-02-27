do {
    let input = prompt("Введите слова");

    if (input === null) {
        break;
    }

    let words = input.split(",");
    let res = "";

    for (let word of words) {
        if (res !== "") {
            res += ".";
        }
        res += word.trim();
    }

    alert(res);
} while (true);
