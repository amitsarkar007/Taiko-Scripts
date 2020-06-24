const { openBrowser, goto, click, screenshot, closeBrowser, title, highlight, text } = require('taiko');
var titleExpected="Executive Search and Recruitment - UK & International | Odgers Berndtson";
var titleActual;
(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: false });

        //Navigate to the page
        await goto("https://www.odgersberndtson.com//en-gb");

        //Get current title
        titleActual = await title();

        //Check if current title equals expected title
        if (titleExpected == titleActual) {console.log("PASS")}
        else {console.log("FAIL")}

        //Check if "Industries" exists
        await text("Industries").exists();
        
        //Take a screenshot
        await screenshot();

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser(); //Close browser
    }
})();