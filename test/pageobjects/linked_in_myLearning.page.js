const baseclass = require("./base_class");


class learningPage extends baseclass{
    get morningHabitslink(){
        return $("//ul[@class='reusable-search__entity-results-list list-style-none']")
    }
    
    async getMyLearningList(){
        console.log("list is: "+await (await this.morningHabitslink).getText());
    }

}
module.exports=new learningPage();