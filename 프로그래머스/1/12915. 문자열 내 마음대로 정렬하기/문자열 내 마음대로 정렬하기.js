function solution(strings, n) {
    var answer = [...strings];
    
    answer.sort((a,b)=>{
        if(a[n] !== b[n]){
          return a[n] < b[n] ? -1 : 1
        }
       return a < b ? -1 : 1
    })
    
    return answer
}