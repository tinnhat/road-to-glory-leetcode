function singleNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
      let check = nums[i]
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
        if(check == nums[j]){
          count++
        }
      }   
      if(count <= 1) {
        return check
      }
    }
};

console.log(singleNumber([4,1,2,1,2]));
