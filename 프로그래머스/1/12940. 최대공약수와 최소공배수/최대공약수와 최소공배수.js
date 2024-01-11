function solution(n, m) {
    let max = min = 0
    for(let i=1; i<Math.max(n,m); i++){
        if(n%i===0 && m%i ===0) max = i
    }
    
    for(let i=n*m; i>=Math.max(n,m); i--){
        if(i%n === 0 && i%m ===0) min = i
    }

    return [max, min]
}