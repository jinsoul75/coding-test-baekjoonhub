function solution(progresses, speeds) {
    let days = [] // 걸리는 날짜

    for(let i=0; i<progresses.length; i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    
    let standard = days[0]
    let count = 1
    let result = []
    //done = [5,3,2,4] standard = 6 done = [6]
    // done = [6]
    // [7,3,9]=>[2,1]
    // standard = 7 done = [7,3] 9
    // [5,3,2,4,6,5,4] => [4,3]
    for(let i=1; i<days.length; i++){
        if(standard >= days[i]){
            count++
        } else {
            result.push(count);
            count = 1;
            standard = days[i]
        }
    }
    result.push(count)
    return result
}


//진도 100%일때 서비스반영
//순서 상관없이 개발 완료될 수 있지만 순서에 따라 배포된다
//pogresses: 먼저 배포되어야 하는 순서대로 작업의 진도
//speeds: 각 작업의 개발속도
//return 각 배포마다 몇개의 기능이 배포되는지
// 95%가 4%/day라면 Math.ceil((100-pogresses)/speeds)
//=>Math.ceil((100-95)/4)