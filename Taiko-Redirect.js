const { openBrowser, intercept, goto, currentURL, closeBrowser } = require('taiko');
(async () => {
    try {
        //Open browser
        await openBrowser({ headless: false });

        //Create an intercept for redirection
        await intercept("https://google.com", "https://bing.com");

        //Navigate to the page
        await goto("https://google.com");

        //Get URL of page
        await console.log(await currentURL());

        //Navigate to the page
        await goto("https://asos.com",{waitForEvents:['DOMContentLoaded']});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();