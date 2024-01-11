function solution(arr1, arr2) {
   
    return  arr1.map((e,i)=>e.map((el,idx)=>el+arr2[i][idx]));
}