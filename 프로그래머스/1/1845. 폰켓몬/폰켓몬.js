function solution(nums) {
    const pick = nums.length/2
    const hs = new Set(nums)
    return pick>=hs.size? hs.size : pick;
}