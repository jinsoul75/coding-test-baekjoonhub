function solution(numbers) {
    const sortedNum = numbers.sort((a,b)=>a-b);
    const num1 = sortedNum[0]*sortedNum[1]
    const num2 = sortedNum[sortedNum.length-1]*sortedNum[sortedNum.length-2]
    return Math.max(num1,num2);
}