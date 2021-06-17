describe("flipkart",()=>{
    it("flip",async ()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.pause(20000);
        await console.log($$('a'));

        
        // var ele=await $("//a[text()='Login'][1]")
        
    })
})