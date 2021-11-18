const FazzFood = (foodPrice, promoCode, distance, tax) => {
    let potonganHarga = 0
    let biayaAntar = 0
    let pajakMakanan = 0
    let subTotal = 0
    if (promoCode !== false) {
        if (promoCode === 'FAZZFOOD5' && foodPrice >= 50000) {
            potonganHarga = foodPrice * 0.5
            if (potonganHarga > 50000) {
                potonganHarga = 50000
            }
        } else if (promoCode === 'DITRAKTIRTAKA' && foodPrice >= 25000) {
            potonganHarga = foodPrice * 0.6
            if (potonganHarga > 30000) {
                potonganHarga = 30000
            }
        }
    }

    if (distance <= 2) {
        biayaAntar = 5000
    } else if (distance > 2) {
        biayaAntar = 5000 + ((distance - 2) * 3000)
    }

    if (tax === true) {
        pajakMakanan = foodPrice * 0.05
    }

    subTotal = (foodPrice - potonganHarga) + biayaAntar + pajakMakanan

    return `Result: 
    Harga       : ${foodPrice}
    Potongan    : ${potonganHarga}
    Biaya Antar : ${biayaAntar}
    Pajak       : ${pajakMakanan}
    Sub Total   : ${subTotal}`
    
}

console.log(FazzFood(75000, 'FAZZFOOD5', 5, true))