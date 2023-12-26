function solution(polynomial) {
    var answer = [0,0];
    const a = polynomial.split(" ")
    a.forEach(el => {
        if(el.includes("x")) answer[0]+= Number(el.split("x")[0]) || 1
        if(!Number.isNaN(Number(el))) answer[1] += Number(el)
    })
    return `${answer[0]===0?"":answer[0]===1?"x":answer[0]+"x"}${answer[0]===0 && answer[1]===0? "":answer[0]===0? answer[1]:answer[1]===0?"":" + "+answer[1]}`
}