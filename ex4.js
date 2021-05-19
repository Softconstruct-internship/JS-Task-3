function num(n) {
    const number = `${n}`
    const result = number.split('').reverse("").join("")
    console.log(result)
}
num(9876)