function solution(numbers) {
  //가장 큰 숫자부터 조합한다
  //+연산자로 조합 찾으려면 문자열이 되어야한다.
    if(numbers.filter((el)=>el!==0).length === 0) return "0"
  return numbers.map((el)=>String(el))
  .sort((a,b)=>(b+a)-(a+b))
  .join("")
}