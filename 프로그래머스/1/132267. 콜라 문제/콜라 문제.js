function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        const free = Math.floor(n/a) * b
        const last = n%a
        answer += free
        n = free+last
    }
    return answer;
}