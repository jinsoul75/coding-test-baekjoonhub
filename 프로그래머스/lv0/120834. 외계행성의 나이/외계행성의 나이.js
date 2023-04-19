function solution(age) {
  const alp = "abcdefghij"
  return String(age).split("").map((el)=>{
    return String(age).split("")[el] = alp[el]
  }).join("")
}