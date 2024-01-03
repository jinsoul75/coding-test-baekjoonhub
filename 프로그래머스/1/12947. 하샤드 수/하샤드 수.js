function solution(x) {
    const sum = x.toString().split("").reduce((a,c)=>Number(a)+Number(c),0)
    
    return x%sum? false:true;
}