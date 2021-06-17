const { clickOnSigninBtn } = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
const { signinButton } = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
var homepage = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
const { jobsButton } = require("../pageobjects/linked_in_user.page")
var userpage = require("../pageobjects/linked_in_user.page")
var learnpage = require("../pageobjects/linked_in_learning.page")
var data=require("C:/Users/FCI1286/Desktop/webdriverio_demo/datafile/data.json")

describe("workpage_scenario", () => {
    it("navigating to workbtn in linkedin", async () => {
        await homepage.openTheUrl(data.url)
        await homepage.inputValue(homepage.username,data.username)
        await homepage.inputValue(homepage.password,data.password)
        await homepage.mousepress(homepage.loginbtn);
        await userpage.mousepress(userpage.workButton)
        await browser.pause(3000)
        await userpage.mousepress(userpage.learningbtn)
        await browser.pause(3000)
        await userpage.switchWindow();
        console.log("title of switched page: " + await userpage.gettitle());
        await learnpage.closewin();
    })
})