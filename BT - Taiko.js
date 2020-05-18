const { openBrowser, goto, click, scrollDown, below, into, write, closeBrowser, textBox, screenshot } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false });
        await goto('bt.com');
        await click('OK',{waitForEvents:['DOMContentLoaded']});
        await click('Broadband');
        await click('Fibre broadband',{waitForEvents:['DOMContentLoaded']});
        await click('See broadband deals',{waitForEvents:['DOMContentLoaded']});
        await scrollDown(1000);
        await click('Add and continue', below('Fibre 2'));
        await write('BR3 4AS', into(textBox('Postcode')));
        await click('Check availability');
        await click($(`//*[contains(text(),'55')]`));
        await click('Confirm address',{waitForEvents:['DOMContentLoaded']});
        await screenshot();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();