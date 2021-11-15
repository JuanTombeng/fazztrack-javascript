const triangleNumber = (input) => {
    let temp = ''
    let result = ''
    if (isNaN(input)) {
        return `Your input is not a number! Please try again.`
    }
    for (let i = input; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            j == i ? temp += j : temp += j + ' '
        }
        i == 1? result += temp : result += temp + '\n'
        temp = ''
    }
    return result
}

console.log(triangleNumber("5"))