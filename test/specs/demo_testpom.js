var login=require("../pageobjects/demo_pom")

describe("demo login pom",()=>{
    it('login',async ()=>{
        await login.navigateToUrl("https://demo.actitime.com/login.do")
        await login.enterUsername("admin")
        await login.enterpassword("manager")
        await login.clickOnLoginBtn();
    })
})