function solution(my_string) {
    let answer = []
    let sign = 1
    
    for(let check of my_string.split(" ")){
        if(check === "+") sign = 1;
        else if(check === "-") sign = -1;
        else answer.push(check*sign)
     }
    return answer.reduce((a,b)=>a+b)
}
