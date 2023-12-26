function solution(numlist, n) {

        return numlist
    .sort((a,b)=>b-a)
    .map(el => 
        [Math.abs(el-n), el]
    )
    .sort((a,b)=>a[0]-b[0])
    .map(el => el[1])


}