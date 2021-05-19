function Y(start, end, delta) {
    let sum = 0
    for (let i = start; i <= end; i += delta) {
        if (i < 5) {
            sum = 2 * i + 1
            console.log(i, sum)
        }
        sum = i ** 2 - 1
        console.log(i, sum)
    }
}

console.log(Y(1, 8, 0.2))