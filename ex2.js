function Y(start, end, delta) {
    let sum
    for (let x = start; x <= end; x += delta) {
        if (x < 3) {
            console.log(sum)
            sum = (5 * x) + 2
        } else if (3 <= x && x <= 10) {
            console.log(sum)
            sum = x ** 2 + x - 1
        } else {
            sum = 1
            console.log(sum)
        }
    }
}
console.log(Y(1, 12, 0.5))