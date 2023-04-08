function solution(array, height) {
  var answer = 0;
  //배열의 길이 - 인덱스값 + 1
  array.push(height)
  array.sort((a,b)=>{return a-b})
  console.log(array.indexOf(height))
  let idx = 0;
  for(let i=0; i<array.length; i++){
    if(array[i]===height){
      idx = i
    }
  }
  console.log(idx)
  console.log(array.indexOf(167))
  return  array.length-(idx+1)
}