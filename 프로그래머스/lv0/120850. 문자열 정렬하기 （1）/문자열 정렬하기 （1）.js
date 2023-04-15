function solution(my_string) {
    const num = "1234567890"
    let answer = []
    for(let i=0; i<my_string.length; i++){
        if(num.includes(my_string[i])){
            answer.push(Number(my_string[i]))
        }
    }
    return answer.sort();
}