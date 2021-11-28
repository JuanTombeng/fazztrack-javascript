const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol',
                'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith',
                'Olivia', 'Penelope']


const searchName = (input, limiter, callback) => {
    let temp = []
    let array = names.map((name) => {
        return name.toLowerCase()
    })
    let result = array.filter((name) => {
        if (name.includes(input.toLowerCase())) {
            temp.push(name)
            return temp
        }
    })
    return callback(result, limiter)
}

const displayResult = (input, limiter) => {
    let result = input.slice(0, limiter)
    return result
}


console.log(searchName('Eli', 3, displayResult))