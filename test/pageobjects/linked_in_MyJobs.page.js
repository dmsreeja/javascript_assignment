const baseclass = require("./base_class");

class myJobsPage extends baseclass{
     get myLearningBtn(){
         return $("//a[@data-control-name='myitems_all_learning']");
     }
}
module.exports=new myJobsPage();