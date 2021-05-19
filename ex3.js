function Sin(N) {
    let sum = 0
    for (let i = 1; i <= N; i++) {
        let sincons = Math.sin(i) / Math.cos(i)
        sum += sincons
    }
    console.log(sum)
}
Sin(10)