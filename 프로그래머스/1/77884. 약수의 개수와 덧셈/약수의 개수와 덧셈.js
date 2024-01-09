function solution(left, right) {
    let answer = 0;
    
    const get = (num) =>{
        const arr = []
        for(let i=1; i<=num; i++){
            if(num%i===0) arr.push(i)
        }
        return arr.length
    }
    
    for(let i=left; i<=right; i++){
        if(get(i)%2) answer-= i
        else answer+=i
    }
    
    return answer
}