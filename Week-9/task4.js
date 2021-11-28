import fetch from 'node-fetch'

const getUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        return data.map(item => {
            console.log(item.name)
        })
    } catch (error) {
        console.log(error)
    }
}

getUsers()