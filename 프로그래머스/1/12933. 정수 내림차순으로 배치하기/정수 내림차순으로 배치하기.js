function solution(n) {
    return Number(n.toString().split("").map(e=>Number(e)).sort((a,b)=>b-a).join(""))
}