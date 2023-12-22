function solution(dots) {
    const key = dots.map(dot=> dot[0])
    const value = dots.map(dot=> dot[1])
    const maxKey = Math.max(...key)
    const minKey =Math.min(...key)
    const maxValue =Math.max(...value)
    const minValue =Math.min(...value)
    
    return (maxKey-minKey)*(maxValue-minValue);
}