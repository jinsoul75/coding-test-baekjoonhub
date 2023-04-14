function solution(rsp) {
    return rsp.split('').map((el)=>
                      el === "2" ? el = "0"
                      : el === "5" ? el = "2"
                      : el = "5"
                     ).join("")
}