function solution(dots) {
    var answer = 0;
    // 12,34 13,24 14,23 
    // dots[1][0]-dots[0][0] === dots[3][0]-dots[2][0]
    const rl = (x1,x2,y1,y2) => (y2-y1) / (x2-x1)
    const arr = [[1,0,3,2],[2,0,3,1],[3,0,2,1]]
    for(let i=0; i<arr.length; i++){
        if(rl(dots[arr[i][0]][0],dots[arr[i][1]][0],dots[arr[i][0]][1],dots[arr[i][1]][1]) === rl(dots[arr[i][2]][0],dots[arr[i][3]][0],dots[arr[i][2]][1],dots[arr[i][3]][1])){
            answer = 1
            break;
        }
    }
    return answer;
}