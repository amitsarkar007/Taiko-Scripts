const { openBrowser, intercept, goto, currentURL, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false });
        await intercept("https://google.com", "https://bing.com");
        await goto("https://google.com");
        await console.log(await currentURL());
        await goto("https://asos.com",{waitForEvents:['DOMContentLoaded']});
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();