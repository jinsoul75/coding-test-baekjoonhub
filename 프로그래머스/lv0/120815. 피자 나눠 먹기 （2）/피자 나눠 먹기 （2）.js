function solution(n) {
  let pizza = 1
  while(6*pizza % n){
    pizza ++
  }
  return pizza
}