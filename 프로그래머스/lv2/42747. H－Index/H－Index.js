function solution(citations){
  // const arr = citations.sort((a,b)=>b-a)


  let b = 1;

  while(citations.filter((el)=>el>=b).length>=b){ //n번이상 인용된 논문의 갯수 >= n편이상일때까지
    citations.filter((el)=>el>=b).length //인용 n편 이상인 논문의 갯수
    b++
  }
  return b-1
}