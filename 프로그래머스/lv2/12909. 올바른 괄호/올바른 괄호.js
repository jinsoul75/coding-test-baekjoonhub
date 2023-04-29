function solution(s){

    let result = [];
    // 문자열을 돌면서 왼쪽이면 넣어뒀다가 오른쪽 만나면 왼쪽을 뺀다
    if(s[0]===")") return false
    
    for(i=0; i<=s.length; i++){
        if(s[i]==="("){
            result.push(s[i])
        } else if(s[i]===")"&&result.pop() !== "("){
            return false;
        }
    }

    return result.length === 0;
}