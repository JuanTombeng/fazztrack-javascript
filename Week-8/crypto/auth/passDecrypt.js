import pkg from "crypto-js";
const { AES, enc } = pkg

const toDecrypt = (input, secretKey) => {
    let bytes = AES.decrypt(input, secretKey)
    let originalMessage = bytes.toString(enc.Utf8)
    return originalMessage
}

export default toDecrypt


// import pkg from "crypto-js";
// const { AES, enc } = pkg

// const toDecrypt = (input, secretKey) => {
//     let bytes = AES.decrypt(input, secretKey)
//     let originalMessage = JSON.parse(bytes.toString(enc.Utf8))
//     return originalMessage
// }

// export default toDecrypt