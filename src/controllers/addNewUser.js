const connection = require('../config/database');

const addNewUserpost=async (req,res)=>{
    let email=req.body.email;
    let name=req.body.name;
    let city=req.body.city;

    let [result,field]= await connection.query(`INSERT INTO user (email,name,city) values(?,?,?)`,
    [email,name,city]);
    console.log(">> Result:", result);
}

module.exports = {addNewUserpost}