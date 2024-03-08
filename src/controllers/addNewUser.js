const connection = require('../config/database');
const addNewUserpost=(req,res)=>{
    let email=req.body.email;
    let name=req.body.name;
    let city=req.body.city;

    connection.query(`INSERT INTO user (email,name,city) values(?,?,?)`,
    [email,name,city],function(err,result,field){
        console.log(">> Error",err);
    })

    res.send('ADD NEW USER SUCCESS!')
}

module.exports = {addNewUserpost}