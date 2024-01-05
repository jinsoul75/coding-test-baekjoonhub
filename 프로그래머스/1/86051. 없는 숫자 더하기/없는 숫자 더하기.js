function solution(numbers) {
return Array.from({length:10}, (_,i)=> numbers.includes(i)? 0:i).reduce((a,c)=>a+c,0)

}