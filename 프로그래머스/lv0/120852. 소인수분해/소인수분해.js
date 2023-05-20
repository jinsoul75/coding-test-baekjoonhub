function solution(n) {
    var answer = [];
    //소수로 나눈 배열
    //12 => /2/2/3
    let i=2
    while(n!==1){
        if(n%i===0){
            answer.push(i)
            n = n/ i
        } else{
            i++
        }
    }
    const result = new Set(answer)
    return [...result];
}