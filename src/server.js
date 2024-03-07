const express = require('express')
const path=require('path') // gọi thư viện path bên trong express
const app = express() // tạo app express
require('dotenv').config()

//console.log('Chek env', process.env)
const port = process.env.PORT || 8989 //port
const hostname=process.env.HOST_NAME

app.set('views',path.join(__dirname,'views')); 
//thiết đặt app sử dụng template engin('views') trong thư mục path.join(__dirname,'views')
//path.join là hàm lấy vị trí hiện tại của file đang thực thi- ở đây nó sẽ lấy vị trí của file server.js vị trí ./src --(trong thư mục src)

app.set('view engine', 'ejs')//xác định template engine cần sử dụng là ejs

//CẤU HÌNH LẤY FILE TĨNH img/css/js
app.use(express.static(path.join(__dirname, 'public')));// lấy đuồng dẫn tới thư mục public express.static(path.join(__dirname, 'public'))

//khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get ('/abc',(req,res)=>{
    res.send('rout link abc')
})
app.get('/first-test-ejs',(req,res)=>{
    res.render('sample.ejs')
})
app.get('/aac',(req,res)=>{
    res.send('Route Link aac')
})

app.get('/acc',(req,res)=>{
    res.send('Link route acc')
})
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})