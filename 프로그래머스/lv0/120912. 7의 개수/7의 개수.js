function solution(array) {
    let arr = [];
    for(let i=0; i<array.length; i++){
        arr = arr.concat(String(array[i]).split(""))
    }
    let count = 0;
    const result = arr.filter(e=>e==="7")
    return result.length;
}