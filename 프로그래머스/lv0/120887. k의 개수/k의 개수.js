function solution(i, j, k) {
    let arr = [];
    
    for(let a=i; a<=j; a++){
        arr.push(String(a))
    }
    
    const newArr = arr.join("").split("")
    
    return newArr.filter(e=>e===`${k}`).length
}