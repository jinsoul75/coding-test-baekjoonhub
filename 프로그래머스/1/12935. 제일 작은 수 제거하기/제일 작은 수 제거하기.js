function solution(arr) {
    const min = Math.min(...arr)
    
    const idx = arr.findIndex(e=>e===min)
    
    return arr.filter((e,i)=>i !== idx) || [-1]
}