const connection = require('../config/database')
const getAllUsers=async()=>
{
    let [result,field]= await connection.query('SELECT * FROM user');
    return result;
}
module.exports={getAllUsers}