function solution(emergency) {
    const newArr = emergency.slice();
    return newArr.map(e=>emergency.sort((a,b)=>b-a).indexOf(e)+1)
}