function solution(id_pw, db) {
    var answer;
    const matchId = db.findIndex(data => data[0] === id_pw[0])

    if(matchId === -1){
        answer = 'fail'
    }else if( db[matchId][1] === id_pw[1] ){
        answer = 'login'
    }else answer = 'wrong pw'

    return answer;
}