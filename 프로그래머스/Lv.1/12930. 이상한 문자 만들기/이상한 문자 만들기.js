function solution(s) {
    let answer = ''
    const words = s.split(" ")
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(j%2) answer+= words[i][j].toLowerCase()
            else answer+= words[i][j].toUpperCase()
        }
        if(i!==words.length-1) answer += " "
    }
    return answer
}