function solution(board) {
    var answer = 0
    const area = [[0,0],[1,-1],[0,1],[1,1],[1,0],[-1,-1],[0,-1],[-1,1],[-1,0]]
    const isSafe = (i,j) => {
             for(const el of area){

                if(i+el[0]>=0 && j+el[1]>=0 && i+el[0]<board[i].length && j+el[1]<board[i].length){
                    console.log(i,j, board[i+el[0]][j+el[1]])
                    if(board[i+el[0]][j+el[1]]===1){
                        return false
                        break;
                    }
                }
            }
      return true
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(isSafe(i,j))answer++
        }
    }
    return answer;
}