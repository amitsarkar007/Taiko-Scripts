//Script still in progress.

const { openBrowser, goto, click, $, closeBrowser, into, textBox, write, screenshot, press, evaluate, waitFor, dropDown, text, highlight } = require('taiko');
const origin_airport = "Berlin";
const destination_airport = "Madrid";
const departure_date = "20 Aug";
const return_date = "31 Aug" ;

(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: false ,args:['--window-size=1440,1200']});
        await goto("https://www.google.co.uk/flights");

        //Enter origin airport
        await write(origin_airport,into(textBox(below("Round trip"))));
        await click("All airports");

        //Enter destination airport
        await write(destination_airport,into(textBox(below("Economy"))))
        await click("All airports");
        await press("Tab");

        //Enter start date of journey
        await write(departure_date);
        await press("Enter");

        //Enter end date of journey
        await write(return_date, into(textBox({placeholder:"Return date"})));
        await press("Enter");
        await click("Done");

        //Select bags
        await evaluate($(`[data-chip=bags]`),(elem) => elem.click());
        await evaluate($(`[aria-label=Increase]`),(elem) => elem.click());
        await click($(`[aria-label=Close]`));

        //Select stops
        await evaluate($(`[data-chip=stops]`),(elem) => elem.click());
        await evaluate($(`//*[contains(text(),'No stops only')]`),(elem) => elem.click());
        await click($(`[aria-label=Close]`));

        //Select price
        await evaluate($(`[data-chip=price]`),(elem) => elem.click());
        await range($(`.gws-flights-filter__price-slider`)).select('400'); //Incremental values of 200
        await click($(`[aria-label=Close]`));

        //Select times
        await evaluate($(`[data-chip=times]`),(elem) => elem.click());
        //await click("No stops only");
        //await click($(`[aria-label=Close]`));

        //Take screenshot of all flight options
        await screenshot({fullPage:true});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();