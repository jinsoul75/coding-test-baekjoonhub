function solution(array, commands) {
  var answer = []; // 1.자르고 2.정렬해서  3.그배열의 k번째 수를 배열로
  // array.slice(commands[0][0]-1,commands[0][1])
  // array.slice(commands[1][0]-1,commands[1][1])
  // array.slice(commands[2][0]-1,commands[2][1])

  //자르기
  for(let i=0; i<commands.length; i++){
    answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>a-b)[commands[i][2]-1])
  }
  // for(let i=0; i<commands.length; i++){
  //   answer.push(quick(array.slice(commands[i][0]-1,commands[i][1]))[commands[i][2]-1])
  // }
  return answer;
}

// function quick(arr){
//   if(arr.length<=1) return arr;

//   const pivot = arr[0]; 
//   const left = [];
//   const right = [];

//   for(let i=1; i<arr.length; i++){ 
//     if(arr[i]<=pivot){
//       left.push(arr[i])
//     }else {
//       right.push(arr[i])
//     }
//   }

//   const lSorted = quick(left);
//   const rSorted = quick(right);
  
//   return [...lSorted,pivot,...rSorted]
// }