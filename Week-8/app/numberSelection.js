const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let result = []
    if(nilaiAkhir < nilaiAwal) {
        return `Nilai awal harus lebih besar daripada nilai akhir.`
    } else if (nilaiAwal == nilaiAkhir) {
        return `Nilai awal tidak boleh sama dengan nilai akhir`
    } else if (dataArray.length <= 5) {
        return `Jumlah angka dalam dataArray tidak cukup`
    } else {
        for (let i = 0; i < dataArray.length; i++) {
            if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
                result.unshift(dataArray[i])
            }
        }
        result = result.sort((small, big) => {
            return small - big
        })
    }
    if (result.length === 0) {
        result = 'Jumlah angka dalam dataArray tidak ada'
    }
    return result
}

console.log(SeleksiNilai(0, 0 , [0, 25, 1, 4, 14, 17, 30, 8]))
// console.log(SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]))
// console.log(SeleksiNilai(5, 17 , [2, 25, 4]))
// console.log(SeleksiNilai(7, 21, [1,2,3,4,5,6]))