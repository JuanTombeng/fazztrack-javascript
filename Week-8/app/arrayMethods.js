// const products = [
//     { id : 1, name : 'Acer', model : 'Swiftbook 14', screen : 'IPS', price : 700 },
//     { id : 2, name : 'Asus', model : 'Vivobook 14', screen : 'IPS', price : 820 },
//     { id : 3, name : 'Dell', model : 'Inspiron 14', screen : 'IPS', price : 640 },
//     { id : 4, name : 'HP', model : 'Spectre 14', screen : 'IPS', price : 850 },
//     { id : 5, name : 'Lenovo', model : 'Ideapad 14', screen : 'IPS', price : 770 },
// ]

// // Method #1
// const sumPrice = (input) => {
//     let initialValue = 0
//     return input.reduce((previousValue, currentValue) => {
//         return previousValue + currentValue.price 
//     }, initialValue)
// }
// console.log(sumPrice(products))


// // Method #2
// const productNames = () => {
//     products.map((product) => {
//         console.log(product.name)
//     })
// }
// productNames()


// // Method #3
// const filteredItems = products.filter((product) => {
//     return product.price < 750
// })
// console.log(filteredItems)


// // Method #4
// const addItems = ({id, name,  model, screen, price}) => {
//     products.push({id, name, model, screen, price})
//     return products
// }
// console.log(addItems({id : 6, name : 'Acer', model : 'Predator 15', screen: 'IPS', price: '880'}))


// // Method #5
// const addItems = ({id, name,  model, screen, price}) => {
//     products.unshift({id, name, model, screen, price})
//     return products
// }
// console.log(addItems({id : 6, name : 'Acer', model : 'Predator 15', screen: 'IPS', price: '880'}))



// const users = [
//     {
//         firstName : 'Juan',
//         lastName : 'Tombeng',
//         department : 'Development'
//     },
//     {
//         firstName : 'John',
//         lastName : 'Morrison',
//         department : 'Finance'
//     },
//     {
//         firstName : 'Arthur',
//         lastName : 'Boi',
//         department : 'Management'
//     },
//     {
//         firstName : 'Verent',
//         lastName : 'Annabelle',
//         department : 'Management'
//     },
// ]

// // Method #6
// const sortUsers = (input) => {
//     return input.sort((a, b) => {
//         let name1 = a.firstName.toUpperCase()
//         let name2 = b.firstName.toUpperCase()
//         if (name1 < name2) {
//             return -1
//         } else if (name1 > name2) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }
// console.log(sortUsers(users))


// // Method #7
// const selectUses = (input) => {
//     return input.slice(1,3)
// }
// console.log(selectUses(users))


// // Method #8
// const findUser = (input) => {
//     return input.find((user) => {
//         return user.firstName === 'Juan'
//     })
// }
// console.log(findUser(users))


// // Method #9
// const deleteLastUser = (input) => {
//     return input.pop()
// }
// console.log(deleteLastUser(users))
// console.log(users)


// // Method #10
// const word = ['F', 'a', 'r', 'r', 'e', 'l']
// const arrayJoin = (input) => {
//     return `Hi! My name is Juan ${input.join('')} Tombeng`
// }
// console.log(arrayJoin(word))


