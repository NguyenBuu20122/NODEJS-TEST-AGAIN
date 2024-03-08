const express=require('express');
const router=express.Router();
const {getHomePage,aac,addNewUser}=require('../controllers/homeController')
const {getSampleTestEjs}=require('../controllers/testEjs')
const {addNewUserpost}=require('../controllers/addNewUser')

//khai báo route
/*router.get('/', (req, res) => {
    res.send('Hello World!')
  })*/

/*  --router.get('/',-- đoạn này mình khai báo route nên giữ nguyên

--(req, res) => {
    res.send('Hello World!')-- đoạn này sẽ được xử lý bên controlllers */

  router.get ('/',getHomePage)
  router.get('/first-test-ejs',getSampleTestEjs)
  router.get('/aac',aac)
  router.get('/add-new-user',addNewUser)
  router.post('/add-new-user',addNewUserpost)

  module.exports = router;