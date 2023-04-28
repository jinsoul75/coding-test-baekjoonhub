function solution(arr)
{
let prev=arr[0];
let result = [arr[0]];
for(let i=1; i<arr.length; i++){
    if(prev!==arr[i]){
        result.push(arr[i])
    }
    prev = arr[i]
}
    return result
}