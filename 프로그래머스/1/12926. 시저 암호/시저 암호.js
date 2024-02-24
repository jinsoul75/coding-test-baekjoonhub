function solution(s, n) {
    var answer = '';
    
    const alphabetLength = 25
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for(let i=0; i<s.length; i++){
       if(s[i] === " ") {
           answer+=" "
           continue
       }
       const uIdx = upperAlphabet.indexOf(s[i])
       const lIdx = lowerAlphabet.indexOf(s[i])
       

       const idx = Math.max(uIdx, lIdx)

       if(idx+n-1>=alphabetLength){
           if(uIdx === idx) answer += upperAlphabet[idx-alphabetLength+n-1] 
           else answer += lowerAlphabet[idx-alphabetLength+n-1] 
       }else {
           console.log(uIdx, idx)
            if(uIdx === idx) answer += upperAlphabet[idx+n] 
           else answer += lowerAlphabet[idx+n] 
       }
    }
    
    return answer;
}