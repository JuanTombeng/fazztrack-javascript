const reverseWord = (input) => {
    let temp = [];
    for (let i = input.length -1; i >= 0; i--) {
        temp.push(input[i])
    }
    console.log(input)
    console.log(temp.join(''))
}

const reverseWord = (input) => {
    let result = ''
    for (let i = input.length -1; i >= 0; i--) {
        result = result + input[i]
    }
    console.log(result)
}

reverseWord('Javascript')