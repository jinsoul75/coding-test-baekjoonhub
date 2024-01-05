function solution(arr, divisor) {
    const divided = arr.filter(e=>e%divisor===0);
    return divided.length ? [...divided].sort((a,b)=>a-b) : [-1]
}