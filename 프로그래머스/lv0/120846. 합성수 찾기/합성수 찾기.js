function solution(n) {
  let result = []
  let count = 0;
  for(let i=4; i<=n; i++){
    i
      for(let j=1; j<=n; j++){
        j
          if(i%j===0){
            count+=1
          }
          if(count>=3){
            result.push(i)
              count = 0
              break;
          }
      }
  }
  return result.length
}