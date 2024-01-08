function solution(n) {
    const a = "수박"
    return n%2 ? a.repeat(n/2) + "수" : a.repeat(n/2)
}