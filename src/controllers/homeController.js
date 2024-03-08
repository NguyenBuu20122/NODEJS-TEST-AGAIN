const getHomePage=(req,res)=>{

    //process data
    //call models
    res.send('Đây là Trang chủ!')
}

const addNewUser=(req,res)=>{
    res.render('add-new-user.ejs');
}

const aac =(req,res)=>{
    res.send('Route Link aac')
}

module.exports={getHomePage,aac,addNewUser}