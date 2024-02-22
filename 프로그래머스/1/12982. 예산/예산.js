function solution(d, budget) {
    var answer = 0;
    const people = d.length;
    const sort = d.sort((a,b)=>a-b)
    for(let i=people; i>0; i--){
        const sum = sort.slice(0,i).reduce((a,c)=>a+c)
        if(sum<=budget) {
            answer = i
            break;
        }
    }
    return answer;
}