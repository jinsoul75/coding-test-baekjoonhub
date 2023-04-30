function solution(array, n) {
    const newArr = array.sort((a,b)=>a-b).map(el=>Math.abs(el-n))
    const min = Math.min(...newArr)
    return array[newArr.indexOf(min)]
}