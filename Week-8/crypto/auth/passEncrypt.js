import pkg from "crypto-js";
const { AES } = pkg

const toEncrypt = (input, secretKey) => {
    let ciphertext = AES.encrypt(input, secretKey).toString()
    return ciphertext
}

export default toEncrypt

// import pkg from "crypto-js";
// const { AES } = pkg

// const toEncrypt = (input, secretKey) => {
//     let ciphertext = AES.encrypt(JSON.stringify(input.password), secretKey).toString()
//     return ciphertext
// }

// export default toEncrypt
