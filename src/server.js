require('dotenv').config()
const express = require('express')
//const path=require('path') // gọi thư viện path bên trong express
const app = express() // tạo app express
const configViewEngine=require('./config/viewEngine');// khai báo sử dụng file cấu hình template view engine.
const staticFile=require('./config/staticFile');// khai báo sử dụng file cấu hình tìm thư mục chứa file tĩnh

const webRoutes=require('./routes/web');
const port = process.env.PORT || 8989 //port
const hostname=process.env.HOST_NAME

//CONFIG req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))


configViewEngine(app);// gọi hàm thiết đặt cấu hình viewsengine- ở file config/viewEngine.js
staticFile(app);//gọi hàm thiết đặt cấu hình file tĩnh ở file config/staticFile

app.use('/',webRoutes);

app.listen(port,hostname, () => {
  console.log(`Example app listening on  ${hostname},port ${port}`)
})