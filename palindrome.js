const palindromeChecker = (input) => {
    let temp = [];
    let result = ''
    lower = input.toLowerCase()
    for (let i = 0; i < lower.length; i++) {
        temp.unshift(lower[i]);
        result = temp.join('')
    }
    if (result === lower) {
        console.log(`The word ${input} is a palindrome`)
    }else {
        console.log(`The word ${input} is NOT a palindrome`)
    }
}

const palindromeChecker = (input) => {
    let result = '';
    let word = input.toLowerCase()
    for (let i = word.length -1; i >= 0; i--) {
        result = result + word[i]
    }
    if (word === result) {
        console.log(`The word ${input} is a Palindrome`)
    } else {
        console.log(`The word ${input} is NOT a Palindrome`)
    }
}

palindromeChecker("kasurinirusak")