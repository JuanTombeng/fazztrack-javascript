const healthChecking = (data) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (data > 7 && typeof data === 'number') {
                resolve(`Tidur anda sudah cukup`)
            } else {
                reject(`Tidur anda masih di bawah 7 jam, mohon diperbaiki`)
            }
        }, 2000)
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
}

healthChecking(8)


const cariKeluarga2 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const data = [1,5,3,7]
            let check = 0
            check = data.filter((item) => {
                return item % 2 === 0
            })
            if (check != 0) {
                resolve(`${check} adalah keluarga 2`)
            } else {
                reject(`Tidak ada keluarga 2`)
            }
        }, 3000)
    })
    .then((check) => {
        console.log(check)
    })
    .catch((err) => {
        console.log(err)
    })
}

cariKeluarga2()


// import fetch from 'node-fetch'
// const displayArticles = () => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let response = fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=Qei6K9NQ4GsryZvi5BcWWEcQpoADuP2')
//             .then((response) => response.json())
//             if (response) {
//                 resolve(response)
//             } else {
//                 reject(new Error(`Error`))
//             }
//         }, 3000)
//     }).then((result) => {
//         return result.results.map((item) => {
//             console.log(item.title)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })
// }

// displayArticles()



