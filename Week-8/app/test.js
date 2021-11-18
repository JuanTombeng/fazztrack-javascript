
// // callback function examples
// const sayHello = (name, callback) => {
//     let greeting = `Hello ${name}`
//     return callback(greeting)
// }

// const showGreeting = (quote) => {
//     return quote
// }

// console.log(sayHello('Juan', showGreeting))

// const gradeSum = (grade1, grade2, callback) => {
//     let sum = grade1 + grade2
//     return `Your total score is: ${sum} and ${callback(sum)}`
// }

// const gradeAvarage = (total) => {
//     return `Your avarage score is: ${total/2}`
// }

// console.log(gradeSum(90, 75, gradeAvarage))

// // version modular
// const gradeSum = (grade1, grade2) => {
//     let sum = grade1 + grade2
//     return gradeAvarage(sum)
// }

// const gradeAvarage = (total) => {
//     return total/2
// }

// console.log(gradeSum(90, 75))

// let test = 'juan@gmail.com'

// const username = () => {
//     let temp = ''
//     for (let i = 0; i < test.length; i++) {
//         temp += test[i]
//         if (test[i] === '@') {
//             break
//         }
//     }
//     return temp
// }

// console.log(username())