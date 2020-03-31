// let nama = require('./satu')

// kalau di satu.js berupa objek
// console.log(nama.nama)
// console.log(nama.namaDua)

// kalau di satu.js berupa array
// console.log(nama[0])
// console.log(nama[1])

// module.exports = 'Hello World'
// require = import
// console.log(hello(nama))

// let satu = require('./satu')

// let { nama, hello, loop, timeout } = satu
// loop(() => console.log('Hello'), 10)
// timeout(() => console.log('Delay'), 1000)
// setTimeout(() => console.log('Timeout'), 3000)

// let assert = require('assert')
// assert untuk unit testing
// apabila di dalam asset ada yang false, langsung lempar error
// let nama = 'Ario'
// console.log('Sebelum')
// assert.equal(nama.length, 4)
// console.log('Sesudah')
// nama.length == 4
// param pertama hal yang mau dites
// param kedua 
// jika param kedua 5, maka akan error karena 'Ario' lengthnya 4

// assert.strictEqual('5', 4)
// strictEqual => === membandingkan tipe data dan valuenya

// assert.notEqual()
// notEqual => !=

// assert.notStrictEqual()
// notStrictEqual => !==

// let url = require('url')
// let link = 'https://localhost:2000/users?username=arioamri'
// let parse = url.parse(link)
// console.log(parse)
// console.log(parse.query)
// console.log(parse.hostname)
// console.log(parse.host)
// console.log(parse.search)

// os untuk mengecek spesifikasi device
// let os = require('os')
// console.log(os.hostname())
// console.log(os.type())
// console.log(os.totalmem()) // ngecek RAM
// console.log(os.freemem())
// console.log(os.cpus())

// backendnya eventListener
// let events = require('events')
// let newEvents = new events.EventEmitter() // class === cetakan object
// console.log(newEvents)
// newEvents.on('click', () => console.log('Ada click'))
// newEvents.emit('click')

// syncronus
const fs = require('fs')
// fs.writeFileSync('test.txt', 'Halo3') // buat file baru (ditimpa)
// fs.appendFileSync('test.txt', 'Halo5' ) // nambahin file yang udah ada --- if not exist bikin file
// fs.unlinkSync('test.txt') // hapus file
fs.linkSync('test.txt', ('Halo'))
// fs.link('text2.txt', () => console.log('berhasil'))
// console.log(fs.readFileSync('test.txt', 'utf8')) // membaca file secara syncronus
// atau bisa dijadikan string
// console.log(fs.readFileSync('test.txt').toString() // dijadikan string
// fs.writeFileSync('./folderBaru/satu.txt', 'Hello di dalam folder')
// fs.unlinkSync('./folderBaru/satu.txt')
// fs.rmdirSync('folderBaru') // sebelum hapus directory, pastikan sudah tidak ada file dalam foldert tsb


// asyncronus
// fs.appendFile('test.txt', '\nHalo6', () => console.log('wah append'))
// fs.unlink('satu.txt', () => console.log('wah didelete')) // hapus data secara asyncronus
// fs.writeFile('test.txt', 'ini satu.js', () => console.log('File berhasil dibuat'))
// console.log('syncronus')
// fs.mkdir('folderBaru', () => console.log('folder baru')) // kalau tidak ada syn membutuhkan callback
