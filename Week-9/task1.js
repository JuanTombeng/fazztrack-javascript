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

/* penjelasan:
    try...catch :
        - try statement adalah sebuah block code yang akan ditest untuk error
        selama block code itu sedang dieksekusi
        - catch statement adalah sebuah block code yang akan dieksekusi apabila
        hasil dari statement try adalah sebuah error

    then...catch : 
        - then method akan dieksekusi sebagai proses lanjutan dari promise
        dengan catatan selama promise men return hasil yang fullfilled promise
        - catch methid akan dieksekusi sebagai proses lanjutan dari promise
        jika hasil dari promise men return hasil yang rejected
*/


    