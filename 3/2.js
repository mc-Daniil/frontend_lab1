do {
    let input = prompt("Введите натуральные числа через пробел");

    if (input === null) {
        break;
    }

    let words = input.split(" ");
    let nums = [];

    for (let word of words) {
        let n = Number(word);
        if (!isNaN(n) && n > 0) {
            nums.push(n);
        }
    }

    if (nums.length === 0) {
        alert("Нет натуралов");
        continue;
    }

    let res = [];
    nums.forEach(function(item) {res.push(item % 5)});

    alert(res.join(" "));

} while (true);