const {getAllUsers} = require('../services/CRUDServices') // khai báo sử dụng hàm getAllUsers

const getHomePage=async(req,res)=>{
    let result= await getAllUsers(); // gọi hàm getAllUsers() từ file services/CRUDServices
    res.render('home.ejs',{listUsers:result}); // gán kết quả(rerult ) từ câu lệnh query vào biến listUsers và chuyển đến cho trang ejs 

}
const addNewUser=(req,res)=>{
    res.render('add-new-user.ejs');
}

const contact =(req,res)=>{
    res.render('contact.ejs');
}
const about =(req,res)=>{
    res.render('about.ejs');
}




module.exports={getHomePage,contact,addNewUser,about,}