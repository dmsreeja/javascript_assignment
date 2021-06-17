

describe("first test suite", () => {


    it("opening the url and validating the page", async function () {
        await browser.url("https://google.com")
        await browser.pause(3000)

        console.log("url of the browser" + await browser.getUrl());
        expect(browser).toHaveUrl('https://google.com')
        //browser.saveScreenshot("C:/Users/FCI1286/Desktop/webdriverio_demo/test/specs/screenshots/sc_01.png")

        var title = await browser.getTitle();
        console.log(title);

        await $('gLFyf gsfi').addValue('webdriverio');
        await browser.pause(3000);


    });

    it.only("find elements",async ()=>{
  await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
  await browser.maximizeWindow();
  var radiobutton=await $("//input[@value='radio2']")
  await radiobutton.click();
//   browser.pause(3000)
  await expect(radiobutton).toBeSelected();//validation on radio button

    })


//   var suggestion_textbox=await $("#autocomplete") //#-id
//   suggestion_textbox.clearValue();  //clearing ext field
//   await suggestion_textbox.setValue("india")
//   var suggestion_element=await $("//ul[@id='ui-id-1']//div[text()='India']");
//   await suggestion_element.waitForDisplayed();
//   browser.pause(3000)
//   await suggestion_element.click();

//   var selectBox=await $("#dropdown-class-example")
//   await selectBox.selectByVisibleText("Option2");
})













