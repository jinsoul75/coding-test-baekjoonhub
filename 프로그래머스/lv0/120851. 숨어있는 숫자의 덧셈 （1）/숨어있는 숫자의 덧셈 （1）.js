function solution(my_string) {
    var answer = 0;
    const number = "1234567890"
    for(let el in my_string){
        if(number.includes(my_string[el])){
            answer += Number(my_string[el])
        }
    }
    return answer;
}