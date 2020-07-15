const { openBrowser, goto, click, goBack, closeTab, closeBrowser } = require('taiko');
(async () => {
    try {
        // Open browser and navigate to page
        await openBrowser({ headless: false });
        await goto("https://www.webmotors.com.br/");

        //Select SUV category
        await click("SUVs");

        //Select a car
        await click("Chevrolet Tracker");

        //Close the new tab
        await closeTab();

        //Select a car
        await click("Chevrolet Tracker");

        //Close the new tab
        await closeTab();

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();