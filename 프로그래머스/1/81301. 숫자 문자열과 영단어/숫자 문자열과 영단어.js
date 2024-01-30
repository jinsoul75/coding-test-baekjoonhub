function solution(s) {
    const match = ['zero','one','two','three','four','five','six','seven','eight','nine']
    let answer = s
    match.forEach((word,index)=>{
        answer = answer.split(word).join(index)
    })
    return Number(answer);
}