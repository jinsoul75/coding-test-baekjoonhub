function solution(lines) {
    var answer = 0;
    // 1구간씩 몇개 겹치는지 배열
    // 2이상인 요소 filter.length ?
    let cnt = 0
    const min = [...lines].sort((a,b) => a[0]-b[0])[0][0]
    const max = [...lines].sort((a,b)=> b[1]-a[1])[0][1]
    const arr = Array.from({length:max-min}, () => 0)
    
    for(let i=min; i<max; i++){
       for(let [e,l] of lines){
           if(e<=i && l>=i+1) cnt ++
       }
       if(cnt >=2) answer++
       cnt = 0
    }
    return answer
}