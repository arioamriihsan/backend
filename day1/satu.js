// console.log(nama)
// module.exports = export default

// let str = require('./index')
// console.log(str)
// let nama = 'Ario'
// let namaDua = 'Andi'
// module.exports = {
//     nama,
//     namaDua
// }

// module.exports = [nama, namaDua]

module.exports = {
    nama : 'Andi',
    hello : (str) => {
        return `Nama saya ${str}`
    },
    loop : (fn,num) => {
        for(let i = 0; i < num; i++) {
            fn()
        }
    },
    timeout : (fn,num) => {
        for(let i = 0; i < num * 1000000; i++) {

        }
        fn()
    }
}