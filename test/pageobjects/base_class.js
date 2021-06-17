class baseclass{
     openTheUrl(url){
         browser.url(url);
         browser.maximizeWindow()
        console.log("the title of the page is:"+ browser.getTitle);
    }
    async mousepress(element){
        await (await element).waitForClickable();
        await (await element).click();
    }
    
    async doubleClickOnElement(element){
        await (await element).doubleClick()
    }
    async inputValue(element,value){
        await (await element).clearValue();
        await (await element).setValue(value);
    }
    async mouseHover(element){
        await (await element).moveTo(element);
    }
    async acceptAlert(){
        await browser.acceptAlert();
    }
    async dismissAlert(){
        await browser.dismissAlert();
    }
    async getTextOfAlert(){
        await browser.getAlertText();
    }
    async sendTextToAlert(value){
        await browser.sendAlertText(value);
    }
    async switchWindow(){
        var currentHandle=await browser.getWindowHandle();
        var allHandles=await browser.getWindowHandles();
        for (const iterator of allHandles) {
            if(iterator!=currentHandle){
                await browser.switchToWindow(iterator);
                break;
            }
        }
    }
    async switchFrame(element){
        await browser.switchToFrame(await element);
    }
    async scrollToView(element){
        await (await element).scrollIntoView();
    }
    async gettitle(){
        return await browser.getTitle();
    }
    async previousPage(){
        await browser.back();
    }
    async closeTab(){
        await browser.closeWindow();
    }
}
module.exports= baseclass