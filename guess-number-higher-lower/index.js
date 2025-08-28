//same nhu binary search
var guessNumber = function (n) {
    let left = 1, right = n;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let check = guess(mid)
        if (check === 0) { return mid; }
        else if (check === 1) { left = mid + 1; }
        else { right = mid - 1; }
    }
};