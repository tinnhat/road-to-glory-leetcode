function countBits(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        var arr = i.toString(2).split('');
        var sum = arr.reduce(function (accumulator, currentValue) { return accumulator + Number(currentValue); }, 0);
        result.push(sum);
    }
    return result;
}
console.log(countBits(5));
