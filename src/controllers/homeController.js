const {getAllUsers} = require('../services/CRUDServices')

const getHomePage=async(req,res)=>{
    let result= await getAllUsers();
    res.render('home.ejs',{listUsers:result});

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