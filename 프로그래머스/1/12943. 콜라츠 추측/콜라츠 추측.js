function solution(num) {
    let n = num
    let cnt = 0
    while(n!==1 &&cnt<500){
        if(n%2){
            n = n*3 + 1
        }else n/=2
        cnt++
    }

    return cnt === 500 && n !==1 ? -1 : cnt
}