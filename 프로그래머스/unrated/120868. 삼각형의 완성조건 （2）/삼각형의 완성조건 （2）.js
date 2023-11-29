function solution(sides) {
    let maxNum = Math.max(...sides)
    let sum = sides.reduce((acc,cur)=>acc+cur);
    let other = maxNum-1;
    let cnt = 0;
    while(maxNum<sum-maxNum+other){
        cnt++;
        other--;
    }
    let maxOther = sum - maxNum
    return cnt+maxOther
}