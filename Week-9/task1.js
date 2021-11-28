const cariHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selase', 'rabu', 'kamis', 'jumat']
            let check = dataDay.find((item) => {
                return item === day
            })
            if (check) {
                resolve(`${day} adalah hari kerja`)
            } else {
                reject(new Error(`Hari ${day} bukan hari kerja`))
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


// const cariHariKerja = async (day) => {
//     try {
//         const result = await new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
//                 let check = dataDay.find((item) => {
//                     return item === day
//                 })
//                 if (check) {
//                     resolve(`${day} adalah hari kerja`)
//                 } else {
//                     reject(new Error(`Hari ${day} bukan hari kerja`))
//                 }
//             }, 3000)
//         })
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

cariHariKerja('senin')