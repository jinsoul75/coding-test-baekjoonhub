function solution(babbling) {
    var answer = 0;

    for(const word of babbling){
        if(canBeAWord(word)) answer ++
    }
    return answer;
}

function canBeAWord(word) {
  const words = ["aya", "ye", "woo", "ma"]
  let w = ""
  const a = []
  for(let i=0; i<word.length; i++){
      w += word[i]
      if(words.includes(w)){
         a.push(w)
         w = ""
      }
  }
    console.log(w, word)
  if(a.join("") === word) return true
  return false
}