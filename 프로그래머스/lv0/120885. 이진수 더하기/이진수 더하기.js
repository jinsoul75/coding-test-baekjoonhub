function solution(bin1, bin2) {
    // 이진수 => 십진수 더하고
    // 십진수 => 이진수 리턴
    const decimal1 = bin1.split("").reverse().map((el,idx)=>el!=="0"? Math.pow(2,idx):Number(el)).reduce((acc,cur)=>acc+cur)
    const decimal2 = bin2.split("").reverse().map((el,idx)=>el!=="0"? Math.pow(2,idx):Number(el)).reduce((acc,cur)=>acc+cur)
    let sum = decimal1+decimal2;
    if(sum === 0) return "0"
    let result = []
    
    while(sum>0){
        result.push(sum%2)
        sum = Math.floor(sum/2)
    }
    return result.reverse().join("")
}