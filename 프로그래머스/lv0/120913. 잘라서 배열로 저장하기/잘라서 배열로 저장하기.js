function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    str = my_str.split("").slice(i,i+n).join("");
    answer.push(str);
  }

  return answer;
}
