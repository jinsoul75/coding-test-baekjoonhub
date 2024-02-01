function solution(food) {
    var serve = '';
    for(let i=1; i<food.length; i++){
        serve+=String(i).repeat(Math.floor(food[i]/2))
    }
    const reverse = serve.split("").reverse().join("")
    return `${serve}0${reverse}`;
}