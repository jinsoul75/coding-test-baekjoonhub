function solution(a, b) {
    var answer = 2;

    if(a/b === parseInt(a/b)){
        answer = 1
        return answer;
    }
    
    let dir = b;
    const min = Math.min(a,b)
    
    for(let i=min; i>1; i--){
        if(a%i === 0 && b%i === 0){
            dir = b/i
            break;
        }
    }

    const c = []
    
    for(let i=2; i<=dir; i++){
        if(dir%i === 0) c.push(i)
    }

    const d = c.filter(el => {
        if(el === 2) return true
        if( el% 2 === 0 ) return false
    for (let i = 3; i <= Math.sqrt(el); i += 2) {
        if (el % i === 0) return false;
    }

    return true; 
    })

    const condition = el => el === 2 || el === 5
    
    if(d.every(condition)) answer = 1
    
    return answer;
}