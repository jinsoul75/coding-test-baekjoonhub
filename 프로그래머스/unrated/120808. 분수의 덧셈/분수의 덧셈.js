function solution(numer1, denom1, numer2, denom2) {
    let answer = [numer1*denom2+denom1*numer2,denom1*denom2];

    for(let i=Math.min(...answer); i>=2; i--){
        if(answer[0]%i ===0 && answer[1]%i ===0) {
            answer=[Math.floor(answer[0]/i),Math.floor(answer[1]/i)]
        }
    }
    return answer;
}