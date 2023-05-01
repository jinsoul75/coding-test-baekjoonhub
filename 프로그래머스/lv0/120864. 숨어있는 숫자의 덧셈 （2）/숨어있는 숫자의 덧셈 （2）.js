function solution(my_string) {
    return  my_string.split("").map(e=>Number(e)).join("").split(NaN).map(e=>Number(e)).reduce((cur,acc)=>cur+acc)

}