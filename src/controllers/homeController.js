const {getAllUsers,getUserById,upDateUserByid} = require('../services/CRUDServices') // khai báo sử dụng hàm getAllUsers
const connection = require('../config/database');


const getHomePage=async(req,res)=>{
    let result= await getAllUsers(); // gọi hàm getAllUsers() từ file services/CRUDServices
    res.render('home.ejs',{listUsers:result}); // gán kết quả(rerult ) từ câu lệnh query vào biến listUsers và chuyển đến cho trang ejs 

}

const getUpdatePage=async(req,res)=>{
    const userId=req.params.id;

    //chuyển câu lệnh query bên dưới sang services/CRUDservices.js
    // let [result,field]= await connection.query('SELECT * FROM user where id=?',[userId])
    // console.log(">>> KQ",result)
    // //result=kết quả trả về là 1 mảng có nhiều objec.- chúng ta cần phải lấy được object đầu tiên qua câu lệnh kiểm tra bên dưới
    // let user =result&&result.length>0?result[0]:{}; // kiểm tra xem kết quả(result) có tồn tại và độ dài có lớn hơn 0 hay không. nếu có thì gán result vào user = phần tử đầu tiên của kết quả, sai thì gán user = rỗng

    let user=await getUserById(userId);
    //console.log(">> User=",user);

    res.render('editUser.ejs',{inforUser:user})
}


const upDateUserPost = async (req,res)=>{
    let email=req.body.updateemail;
    let username=req.body.updatename;
    let city = req.body.updatecity;
    let userId= req.body.userId;

    console.log("REQ. BODY Email: ",email," Name: ",username," City: ",city," UserId: ",userId)
    await upDateUserByid(email,username,city,userId)
    res.redirect('/');
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




module.exports={getHomePage,contact,addNewUser,about,getUpdatePage,upDateUserPost}