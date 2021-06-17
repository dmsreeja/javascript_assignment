const baseclass = require("./base_class");

class pageLearning extends baseclass{
    async closewin(){
        await browser.closeWindow();
    }
}
module.exports=new pageLearning()