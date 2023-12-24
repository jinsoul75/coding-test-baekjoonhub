function solution(score) {
    var answer = [];
    const everage = score.map(([en,ma]) => (en+ma)/2)
    const sort = [...everage].sort((a,b)=>b-a)
    for(const ever of everage){
        answer.push(sort.indexOf(ever)+1)
    }
    return answer;
}