function getMed(...nums) {
    let len = nums.length;

    if (len === 0) {
        return 0;
    }

    nums.sort(function(a, b) {return a - b});
    let i = Math.floor(len / 2);

    if (len % 2 === 0) {
        return (nums[i - 1] + nums[i]) / 2;
    }
    else {
        return nums[i];
    }
}

alert(getMed(10, 2, 5, 8, 1));
let numbers = [10, 2, 5, 8, 1];
alert(getMed(...numbers));