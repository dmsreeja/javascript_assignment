const { expect } = require("chai");

describe('element methods',()=>{
    it('scrolling to particular elelment',async ()=>{
        await browser.url("https://www.amazon.com/")
        var element=await $("//img[@alt='Explore home bedding']")
        await element.scrollIntoView();
        await expect(element).toBeDisplayedInViewport();
    })
})