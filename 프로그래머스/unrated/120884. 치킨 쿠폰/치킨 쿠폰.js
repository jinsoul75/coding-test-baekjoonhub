function solution(chicken) {
    let coupon = 0;
    let free = 0;
    coupon += chicken
    while(coupon>=10){
        const freeByCoupon = Math.floor(coupon/10)
        free += freeByCoupon
        coupon += freeByCoupon - 10*freeByCoupon
    }

    return free;
}