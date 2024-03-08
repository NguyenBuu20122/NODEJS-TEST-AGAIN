const path=require('path');// gọi thư viện path bên trong express
const express=require('express');

const staticFile=(app)=>{
    //CẤU HÌNH LẤY FILE TĨNH img/css/js
    app.use(express.static(path.join(__dirname,'../public'))) 
}
module.exports=staticFile;