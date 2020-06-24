const { openBrowser, goto, closeBrowser, title, button, text } = require('taiko');
var expectedTitle="Executive Search and Recruitment - UK & International | Odgers Berndtson";
var expectedText="Industries";

(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: true });

        //Navigate to the page
        await goto("https://www.odgersberndtson.com//en-gb");

        //Get actual title
        actualTitle = await title();

        //Check if actual title equals expected title
        if (expectedTitle == actualTitle) {console.log("PASS")}
        else {console.log("FAIL")}

        //Get actual text
        actualText = await text(expectedText).exists();

        //Check if expected text exists or not
        if (actualText == true) {console.log(expectedText,"exists")}
        else {console.log(expectedText, "doesn't exist")}

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser(); //Close browser
    }
})();