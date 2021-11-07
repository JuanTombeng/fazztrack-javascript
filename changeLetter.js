const changeLetter = (input) => {
    let temp = [];
    let lower = input.toLowerCase()
    for (let i = 0; i < lower.length; i++) {
        if (lower[i] !== 'a') {
            temp.push(lower[i])
        } else {
            temp.push('o')
        }
    }
    console.log(input)
    console.log(temp.join(''))
}

const changeLetter = (input) => {
    let result = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'A') {
            result = result + 'o'
        } else {
            result = result + input[i]
        }
    }
    console.log(result)
}

changeLetter('JakArta SurabAya')