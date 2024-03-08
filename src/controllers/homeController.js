const getHomePage=(req,res)=>{

    //process data
    //call models
    res.render('home.ejs');
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


module.exports={getHomePage,contact,addNewUser,about}