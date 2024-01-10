function solution(s) {

    if(s.length!==4 && s.length!==6) return false

   return  s.split("").filter(e=> Number.isNaN(Number(e))).length ? false: true
}