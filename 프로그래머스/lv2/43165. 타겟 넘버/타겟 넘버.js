function solution(numbers, target) {
    var answer = 0;
    let n = numbers.length;
    function dfs(el, sum){
        if(el === n){
            if(sum === target) answer++;
        }else{
            dfs(el+1, sum+numbers[el])
            dfs(el+1, sum-numbers[el])
        }
    }
    dfs(0,0)
    return answer;
}