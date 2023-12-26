function solution(A, B) {
    var answer = 0;
    const arr = A.split("")
    let count = 0
    for(let i=0; i<A.length; i++){
       if(A === B) break;
       const last = arr.pop()
       arr.unshift(last)
       count+=1

       if(arr.join("") === B) {
           answer = count;
           break;
       }
        if(count === A.length-1){
            answer = -1
        }
    }
    
    return answer;
}