import toEncrypt from './auth/passEncrypt.js'
import toDecrypt from './auth/passDecrypt.js'

let database = []

const signup = (email, password) => {
    let encrypted =  toEncrypt(password, email)
    let username = () => {
        let temp = ''
        for (let i = 0; i < email.length; i++) {
            
            if (email[i] === '@') {
                break
            } else {
                temp += email[i]
            }
        }
        return temp
    }
    database.push({email: email, password: encrypted, name: username()})
    return `Succesfully signed up! Hello Mr.${username()}`
}

const login = (email, password) => {
    let temp = database.find((user) => {
        return user.email === email
    })
    let decrypted = toDecrypt(temp.password, temp.email)
    if (password === decrypted) {
        return `Welcome back Mr.${temp.name}`
    } else {
        return `Try again`
    }
}

console.log(signup('juan@gmail.com','Asd,car21'))
console.log(login('juan@gmail.com','Asd,car21'))

