const baseclass = require("./base_class");


class homePage extends baseclass{
  
    get username(){
        return  $("#session_key")
    }
    get password(){
        return $("#session_password")
    }
   get loginbtn(){
        return  $('//button[@type="submit"]')
    }
}
module.exports=new homePage()