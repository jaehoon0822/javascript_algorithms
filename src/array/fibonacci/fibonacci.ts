const fibonacci: number[] = []

fibonacci[0] = 1
fibonacci[1] = 1

for (let i = 2; i < 20; i += 1) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

for (let i = 0; i < fibonacci.length; i += 1) {
    console.log(fibonacci[i])
}
