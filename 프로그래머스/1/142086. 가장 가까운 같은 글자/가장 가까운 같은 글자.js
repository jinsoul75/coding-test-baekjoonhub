function solution(s) {
    let word = ""
    const len = s.length
    const answer = []
    for(let i=0; i<len; i++){
        const idx = word.indexOf(s[i])
        if(idx<0) {answer.push(idx)}
        else answer.push(word.length-word.lastIndexOf(s[i]))
        word+=s[i]
    }
    return answer
}