const baseclass = require("./base_class");


class userPage extends baseclass{
      get workButton(){
          return  $("//button[@class='global-nav__primary-link']");
      }
      get jobButton(){
          return $("//a[@data-control-name='nav_jobs']");
      }
     
      get learningbtn(){
        return  $("//a[@data-control-name='nav_launcher_learning']")
    }
   
}
module.exports=new userPage()