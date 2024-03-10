const connection = require('../config/database')
const getAllUsers=async()=>
{
    let [result,field]= await connection.query('SELECT * FROM user');
    return result;
}

const getUserById = async(userId)=>{
    let [result,field]= await connection.query('SELECT * FROM user where id=?',[userId])
    console.log(">>> KQ",result)
    //result=kết quả trả về là 1 mảng có nhiều objec.- chúng ta cần phải lấy được object đầu tiên qua câu lệnh kiểm tra bên dưới
    let user =result&&result.length>0?result[0]:{}; // kiểm tra xem kết quả(result) có tồn tại và độ dài có lớn hơn 0 hay không. nếu có thì gán user = phần tử đầu tiên của kết quả, sai thì gán user = rỗng

    return user;

}
 
module.exports={getAllUsers,getUserById}