function solution(sizes) {
    var answer = 0;
    const sortedSizes = sizes.map(size=>size.sort((a,b)=>a-b))
    const max1 = Math.max(...[...sortedSizes].map(sortedSize => sortedSize[1])) 
    const max2 = Math.max(...[...sortedSizes].map(sortedSize => sortedSize[0])) 
    
    return max1*max2
}