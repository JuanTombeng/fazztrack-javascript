import fetch from 'node-fetch'

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    response.json()
    .then(data => {
        return data.map(item => {
            console.log(item.name)
        })
    })
    .catch(error=>{
        console.log(`Data Not Found`)
    })
}


console.log(getUsers())