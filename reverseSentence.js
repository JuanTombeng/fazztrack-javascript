const reverseSentence = (input) => {
    let temp = [];
    let result = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            temp.push(input[i])
        } else if (input[i] === ' ') {
            result.unshift(temp.join(''))
            temp = []
            input[i + 1]
        }
    }
    result.unshift(temp.join(''))
    console.log(`Sentence to be reverse = ${input}`)
    console.log(`Result after reverse = ${result.join(' ')}`)
}

const reverseSentence = (input) => {
    let word1 = ''
    let word2 = ''
    let temp = '';
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            temp = temp + input[i];
        } if (input[i] === ' ' && counter === 0) {
            counter++
            word1 = word1 + temp;
            temp = ''
        } else if (input[i] === ' ' && counter > 0) {
            word2 = word2 + temp;
            temp = ''
        }
    }
    console.log(`${temp} ${word2} ${word1}`)
}

const reverseSentence = (input) => {
    let result = ''
    let temp = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            temp = temp + input[i]
        } else if (input[i] === ' ') {
            result = ' ' + temp + result;
            temp = ''
        }
    }
    console.log(`${temp}${result}`)
}

reverseSentence("Saya Belajar Javascript")