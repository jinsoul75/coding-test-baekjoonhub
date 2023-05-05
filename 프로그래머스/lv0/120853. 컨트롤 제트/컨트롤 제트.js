function solution(s) {
    const arr = s.split(" ").map(e=>Number(e));
    let result=0;
    for(let i=0; i<arr.length; i++){
        if(!isNaN(arr[i])){
            result+=arr[i]
        }else{
            result-=arr[i-1]
        }
    }
    return result
    // return s.split(" ").map(e=>Number(e))
}