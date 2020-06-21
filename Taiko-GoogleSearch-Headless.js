const { openBrowser, goto, write, click, screenshot, closeBrowser } = require('taiko');

(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: true, args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote']});

        //Navigate to the page
        await goto('google.com');
        
        //Type "Gauge Taiko" into the text box
        await write('Gauge Taiko');

        //Click "Google Search" button
        await click('Google Search');
        
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser(); //Close browser
    }
})();