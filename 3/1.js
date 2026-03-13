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

    nums.sort(function comp(a, b) {return b - a});

    if (nums.length === 0) {
        alert("Нет натуралов");
        continue;
    }
    alert(nums.join(" "));

} while (true);