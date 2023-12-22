function solution(dots) {
    const x = []
    const y = []
    
    for(const dot of dots){
        x.push(dot[0])
        y.push(dot[1])
    }
    
    return (Math.max(...x)-Math.min(...x))*(Math.max(...y)-Math.min(...y))
}