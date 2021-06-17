const baseclass = require("./base_class");

class jobsPage extends baseclass{
     get myjobsBtn(){
        return  $("//a[@data-control-name='jobshome_nav_my_jobs']")
       }
      
}
module.exports = new jobsPage();