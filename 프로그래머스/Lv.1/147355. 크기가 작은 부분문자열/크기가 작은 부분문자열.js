function solution(t, p) {
    const pLen = p.length
    const partOfT = []
    
    for(let i=0; i<=t.length-pLen; i++){
        partOfT.push(t.slice(i,i+pLen))
    }
    
    return partOfT.filter((e)=> Number(e)<=Number(p)).length
}