const gradeChecking = (data) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let sum = data.reduce((previous, current) => {
                return previous + current
            })
            if (sum != null) {
                resolve(`The total grade is ${sum}, and the avarage grade is ${sum/data.length}`)
            } else {
                reject(new Error(`Please reinput the grades`))
            }
        }, 2000)
    }).then((sum) => {
        console.log(sum)
    }).catch((error) => {
        console.log(error)
    })
}

gradeChecking([30, 32, 33])

