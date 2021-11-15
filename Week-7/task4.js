let data = {
    id : 1,
    name : 'Leanne Graham',
    username : 'Bret',
    email : 'Sincere@april.biz',
    address : {
        street : 'Kulas Light',
        suite : 'Apt. 556',
        city : 'Gwenborough',
        zipcode : '92998-3874'
    },
    phone : '1-770-736-8031 x56442',
    website : 'hildegard.org'
}

let juan = {
    name : 'Juan Tombeng',
    email : 'juantombeng03@gmail.com',
    hobbies : ['Playing Music', 'Watching movies', 'Swimming']  
}

function myBio ({name, email, hobbies}) {
    return {
        ...data,
        name,
        email,
        hobbies
    }
}

console.log(myBio(juan))

let juan = {
            ...data,
            name : 'Juan Tombeng',
            email : 'juantombeng03@gmail.com',
            hobbies : ['Playing Music', 'Watching movies', 'Swimming']    
        }

console.log(juan)

let {address} = data
let {street, city} = address

console.log(street)
console.log(city)
console.log(address)

let {street, city} = data.address

console.log(street)
console.log(city)
console.log(address)