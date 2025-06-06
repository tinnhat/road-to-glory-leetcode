var twoSum = function(nums, target) {
    let posL = 0
    let posR = nums.length - 1
    //sort  nums to use 2 pointer
    while (posL < posR) {
        if (nums[posL] + nums[posR] > target) {
            posR--
        } else if (nums[posL] + nums[posR] < target) {
            posL++
        } else {
            break
        }
    }
    return [posL + 1,posR + 1]
};