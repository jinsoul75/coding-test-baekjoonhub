function makeMap (n,num){
    const parse = []
    let result = '';
    while (num > 0) {
        result = (num % 2).toString() + result
        num = Math.floor(num / 2);
    }
    const length = n-result.length
    if(result.length < n) result = "0".repeat(length) + result
    return result
}

function solution(n, arr1, arr2) {
    var answer = [];
    const map1 = arr1.map(e=>makeMap(n,e))
    const map2 = arr2.map(e=>makeMap(n,e))

    for(let i=0; i<map1.length; i++){
        let m = ''
        for(let j=0; j<map2.length; j++){
            if(map1[i][j] === "1" || map2[i][j] === "1") m+="#"
            else m+=" "
        }
        answer.push(m)
    }
    return answer
}