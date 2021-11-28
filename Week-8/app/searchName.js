// //version 1
// const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
//                 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
//                 'Olivia', 'Penelope']

// const searchNames = (input, limiter, callback) => {
//     let temp = []
//     for(let i = 0; i < input.length; i++) {
//         for(let j = 0; j < input[i].length; j++) {
//             if(input[i][j] === 'a' || input[i][j] === 'A') {
//                 if(input[i][j + 1] === 'n' || input[i][j + 1] === 'N') {
//                     temp.push(input[i])
//                 }
//             }
//         }
//     }
//     return callback(temp, limiter)
// }

// const displayResult = (input, limiter) => {
//     let result = input.slice(0, limiter)
//     return result
// }

// console.log(searchNames(names, 3, displayResult))


// //version 2
// const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
//                 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
//                 'Olivia', 'Penelope']

// const searchNames = (input, limiter, callback) => {
//     let temp = []

//     let obj = input.split('')

//     for(let i = 0; i < names.length; i++) {
//         for(let j = 0; j < names[i].length; j++) {
//             if(names[i][j] === obj[0] || names[i][j] === obj[0].toUpperCase()) {
//                 if(names[i][j + 1] === obj[1] || names[i][j + 1] === obj[1].toUpperCase()) {
//                     temp.push(names[i])
//                 }
//             }
//         }
//     }
//     return callback(temp, limiter)
// }

// const displayResult = (input, limiter) => {
//     let result = input.slice(0, limiter)
//     return result
// }

// console.log(searchNames('pe', 3, displayResult))


// version 3
const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
                'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
                'Olivia', 'Penelope']

const searchNames = (input, limiter, callback) => {
    let temp = []

    const [head, ...rest] = input

    for(let i = 0; i < names.length; i++) {
        for(let j = 0; j < names[i].length; j++) {
            if(names[i][j] + names[i][j+1] === input || names[i][j] + names[i][j+1] === head.toUpperCase() + rest) {
                temp.push(names[i])
            }
        }
    }
    return callback(temp, limiter)
}

const displayResult = (input, limiter) => {
    let result = input.slice(0, limiter)
    return result
}

console.log(searchNames('pe', 3, displayResult))