function solution(keyinput, board) {
    var answer = [0,0];
    const point = {
        up: [0,1],
        down:[0,-1],
        left:[-1,0],
        right:[1,0],
    }
    
    for(let key of keyinput){
    for(let i=0; i<2; i+=1){
        const result = Math.abs(answer[i]+point[key][i])
                if(result<=Math.floor(board[i]/2)){
                    answer[i]+=point[key][i]
        }
    }
}

    
    
    return answer;
}