function solution(a, b) {
    const day = new Date(`2016-${a}-${b}`)
    const dayNum = day.getDay();
    const dayArr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    return dayArr[dayNum];
}