function solution(n) {
    var answer = 0;
    
    for(let el in String(n)){
        answer += Number(String(n)[el])
    }
    return answer;
}