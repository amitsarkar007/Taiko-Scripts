const { openBrowser, goto, click, scrollDown, below, into, write, closeBrowser, textBox, $ } = require('taiko');
(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: true, args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote']});

        //Navigate to the page
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
        await write('BR3 4AS', into(textBox(below(text('Postcode')))));
        await click('Check availability');
        await click(button("55 Eden Road"));
        await click('Confirm address',{waitForEvents:['DOMContentLoaded']});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();