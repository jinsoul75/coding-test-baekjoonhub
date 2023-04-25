function solution(n) {
    let result = 1;
    let fac=1;
    while(n>=fac*result){
        fac = fac*result
        result++
    }
    return result-1
    // result*reult+1*result+2... >=n 같거나 커진순간의 최댓값
}