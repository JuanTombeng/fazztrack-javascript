const mtk = 89
const bahasaIndonesia = 89
const bahasaInggris = 89
const ipa = 89

const gradeAvarage = () => {
    let grades = [mtk, bahasaIndonesia, bahasaInggris, ipa]
    let avarage = 0

    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] == 'string') {
            console.log("One of the grades is not a number.")
            avarage = 0
            break
        } else if (grades[i] > 100) {
            console.log("One of the grades is above 100.")
            avarage = 0
            break
        } else {
            avarage += grades[i] / grades.length
        }
    }
    switch (true) {
        case avarage > 89:
            console.log(`Your grade avarage is ${avarage} and your grade is A`)
            break;
        case avarage > 79:
            console.log(`Your grade avarage is ${avarage} and your grade is B`)
            break
        case avarage > 69:
            console.log(`Your grade avarage is ${avarage} and your grade is C`)
            break
        case avarage > 59:
            console.log(`Your grade avarage is ${avarage} and your grade is D`)
            break
        default:
            console.log(`Your grade avarage is ${avarage} and your grade is E`)
    }
}

gradeAvarage()