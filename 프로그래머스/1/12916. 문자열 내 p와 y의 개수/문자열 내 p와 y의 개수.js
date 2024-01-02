function solution(s){
    let p = 0
    let y = 0
    for(let i=0; i<s.length; i++){
        if(s[i].toUpperCase()==="P") p++
        if(s[i].toUpperCase()==="Y") y++
    }
    
    return p===y
}