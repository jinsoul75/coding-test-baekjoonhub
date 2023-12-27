function solution(array) {
    if(array.length === 1) return array[0]
    const set = new Set(array)
    if(set.size === 1) return array[0]
    let count = 1
    let arr = []
    const sorted = array.sort((a,b)=> a-b)
    for(let i=1; i<=sorted.length; i++){
        if(sorted[i-1] === sorted[i]){
            count+=1
        }else{
            arr.push([sorted[i-1], count])
            count = 1
        }
    }

    const sort = arr.sort((a,b)=> b[1]-a[1])
    console.log(sort)
    if(sort[0][1]===sort[1][1]) return -1
    
    return sort[0][0]
}