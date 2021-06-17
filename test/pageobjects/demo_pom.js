class login{
    async navigateToUrl(url){
        await browser.url(url);
        await browser.pause(10000)
        console.log("title of the browser"+await browser.getTitle());
    }
  get inputUsername(){
       return  $("#username");
   }
   async enterUsername(value){
       await (await this.inputUsername).clearValue();
       await (await this.inputUsername).setValue(value);
   }
    get inputPassword(){
       return  $("input[name='pwd']");
   }
   async enterpassword(pwd){
       await (await this.inputPassword).clearValue();
       await (await this.inputPassword).setValue(pwd);
   }
  get loginbtn(){
       return $("#loginButton");
   }
}
module.exports= new login();