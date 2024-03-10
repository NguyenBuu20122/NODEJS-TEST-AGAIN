const connection = require('../config/database');

const showAllUser= async (req,res)=>{

    const [result,field]= await connection.query('SELECT * FROM user');
}
module.exports =showAllUser;