import fetch from 'node-fetch'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = res.json()
    return data
}

const getUsers = async (data) => {
    data.then(data => {
        return data.map(item => {
            console.log(item.name)
        })
    })
    .catch(error=>{
        console.log(`Data Not Found`)
    })
}


getUsers(fetcher('https://jsonplaceholder.typicode.com/users'))