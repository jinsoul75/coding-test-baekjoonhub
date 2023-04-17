function solution(my_string, num1, num2) {
 const arr = my_string.split("")
 const charNum1 = arr[num1]
 const charNum2 = arr[num2]

 arr.splice(num1, 1, charNum2);
 arr.splice(num2, 1, charNum1);

 return arr.join("")
}