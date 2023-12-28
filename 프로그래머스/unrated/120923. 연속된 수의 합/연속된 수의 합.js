function solution(num, total) {
    const answer = []
    const mid = Math.floor(total/num)
    let first = 0
    if(num%2) first = mid-Math.floor(num/2)
    else first = mid-((num/2)-1)
    
    for(let i=0; i<num; i++) answer.push(first+i)
    
    return answer
}