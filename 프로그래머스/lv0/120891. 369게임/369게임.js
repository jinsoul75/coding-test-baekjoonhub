function solution(order) {
  let count=0;
  for(let i=0; i<String(order).length; i++){
    if(String(order)[i]>=1 &&String(order)[i]%3 === 0){
      count ++
    }
  }
  return count
}