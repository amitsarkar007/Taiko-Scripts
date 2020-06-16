const { openBrowser, goto, click, scrollDown, below, into, write, closeBrowser, textBox, screenshot, $ } = require('taiko');
(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: false });
        await goto('bt.com');

        //Accept cookie alert on the page and wait for page to reload
        await click('OK',{waitForEvents:['DOMContentLoaded']});
        
        //Select Fibre Broadband from the menu
        await click('Broadband');
        await click('Fibre broadband',{waitForEvents:['DOMContentLoaded']});

        //See Fibre Broadband deals
        await click('See broadband deals',{waitForEvents:['DOMContentLoaded']});

        //Select Fibre 2 Broadband plan
        await scrollDown(1000);
        await click('Add and continue', below('Fibre 2'));

        //Enter postcode and confirm address to check for availability
        await write('BR3 4AS', into(textBox('Postcode')));
        await click('Check availability');
        await click($(`//*[contains(text(),'55')]`));
        await click('Confirm address',{waitForEvents:['DOMContentLoaded']});

        //Take screenshot of the page
        await screenshot();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();