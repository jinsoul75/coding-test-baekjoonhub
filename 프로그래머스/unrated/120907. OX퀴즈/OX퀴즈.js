function solution(quiz) {
    var answer = [];
    quiz.forEach(el => {
        const split = el.split(" ")
        if(split[1] === "+"){
           if(Number(split[0])+Number(split[2]) === Number(split[4])) answer.push("O")
           else answer.push("X")
        }else {
           if(Number(split[0])-Number(split[2]) === Number(split[4])) answer.push("O")
           else answer.push("X")
        }

    })
    return answer;
}