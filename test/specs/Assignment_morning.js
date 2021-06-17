describe('Assignment',()=>{
    it("switching window",async ()=>{
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow();
        var window=await $('#openwindow')
        window.click();
        browser.pause(10000)
        var current_windowhandle= await browser.getWindowHandle();
        var allwindowHandles=await browser.getWindowHandles();
        for (const iterator of allwindowHandles) {
          if(iterator!=current_windowhandle)
          {
            await browser.switchToWindow(iterator);
            browser.pause(3000);
            console.log("title of the switched page:"+await browser.getTitle());
          }
        }
    })    
    it("hide and show element",async ()=>{
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow();
        var hide_button=await $("#hide-textbox");
        hide_button.click();
        browser.pause(3000);
        var hide_showtxtbox=await $("#displayed-text")
        console.log("after clicking hide button"+await hide_showtxtbox.isDisplayed());
        var show_button=await $("#show-textbox");
        show_button.click();
        browser.pause(3000);
        console.log("after clicking show button"+await hide_showtxtbox.isDisplayed());

    })
    it("switching frames",async ()=>{
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        await browser.maximizeWindow();
        var frame_loc=await $("//legend[text()='iFrame Example']");
        await frame_loc.scrollIntoView();
        var frame_address=$("#courses-iframe")
        await browser.switchToFrame(0);
        browser.pause(5000);
        console.log("the frame title is: "+await browser.getTitle());
    })
})