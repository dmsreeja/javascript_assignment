const { clickOnSigninBtn } = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
const { signinButton } = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
var homepage = require("C:/Users/FCI1286/Desktop/webdriverio_demo/test/pageobjects/linked_in_home.page.js")
const { jobsButton } = require("../pageobjects/linked_in_user.page")
var userpage = require("../pageobjects/linked_in_user.page")
var jobspage=require("../pageobjects/linked_in_jobs.page")
var myjobs=require("../pageobjects/linked_in_MyJobs.page")
var mylearn=require("../pageobjects/linked_in_myLearning.page")
const {data} =require("C:/Users/FCI1286/Desktop/webdriverio_demo/datafile/excelData.js")

describe("jobspage_scenario", () => {
    it("navigating to jobsbtn in linkedin", async () => {
        await homepage.openTheUrl(data[0].URL)
        await browser.pause(5000)
        await homepage.inputValue(homepage.username,data[0].USERNAME)
        await homepage.inputValue(homepage.password,data[0].PASSWORD)
        await browser.pause(5000)
        await homepage.mousepress(homepage.loginbtn)
        await browser.pause(10000)
        await userpage.mousepress(userpage.jobButton)
        await browser.pause(3000)
         await jobspage.mousepress(jobspage.myjobsBtn)
         await browser.pause(3000)
         await myjobs.mousepress(myjobs.myLearningBtn)
         await browser.pause(5000)
         await mylearn.getMyLearningList();
        
    })
})