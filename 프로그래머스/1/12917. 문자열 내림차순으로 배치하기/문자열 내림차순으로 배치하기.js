function solution(s) {
    const uppercase = []
    const lowercase = []
    for(let i=0; i<s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            uppercase.push(s[i])
        }else
        lowercase.push(s[i])
    }
    return [...lowercase].sort().reverse().concat([...uppercase].sort().reverse()).join("")
}