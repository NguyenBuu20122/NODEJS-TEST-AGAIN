//const app=require('express');
// gọi thư viện path bên trong express
const path = require('path');
const express=require('express');

// CẤU HÌNH KHAI BÁO SỬ DỤNG VIEW ENGINE
const configViewEngine = (app)=>{
    //thiết đặt app sử dụng template engin('views') trong thư mục path.join(__dirname,'views')
    app.set('views',path.join(__dirname,('../views')))//path.join là hàm lấy vị trí hiện tại của file đang thực thi- ở đây nó sẽ lấy vị trí của file server.js vị trí ./src --(trong thư mục src)
    app.set('view engine','ejs')//xác định template engine cần sử dụng là ejs
 

}

module.exports=configViewEngine;