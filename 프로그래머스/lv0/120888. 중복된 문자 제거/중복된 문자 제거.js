function solution(my_string) {
    const newStr = new Set(my_string.split(""))
    return Array.from(newStr).join("")
}