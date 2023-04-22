function solution(n) {
  let pizza = 1
  while(n){
    if((6*pizza) % n === 0) break
    pizza ++
  }
  return pizza
}