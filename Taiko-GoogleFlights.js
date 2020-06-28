//Script still in progress.

const { openBrowser, goto, click, $, closeBrowser, into, textBox, write, screenshot, press, evaluate, waitFor, dropDown } = require('taiko');
const origin_airport = "Berlin";
const destination_airport = "Madrid";
const departure_date = "01 Aug";
const return_date = "31 Aug" ;

(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: false ,args:['--window-size=1440,1200']});
        await goto("https://www.google.co.uk/flights");

        //Enter origin and destination airport
        await waitFor( async () => await $(`[data-flt-ve=origin_airport]`).isVisible());
        await click($(`[data-flt-ve=origin_airport]`));
        await write(origin_airport, into(textBox({placeholder:"Where from?"})));
        await click("All airports");
        await waitFor( async () => await $(`[data-flt-ve=destination_airport]`).isVisible());
        await press("Tab");

        //await evaluate($(`[data-flt-ve=destination_airport]`),(elem) => elem.click());
        await write(destination_airport);//, into(textBox({placeholder:"Where to?"})));
        await click("All airports");
        await press("Tab");

        //Enter start and end date of journey
        //await click($(`.gws-flights-form__date-content`));
        await write(departure_date);//, into(textBox({placeholder:"Departure date"})));
        await press("Enter");
        await write(return_date, into(textBox({placeholder:"Return date"})));
        await press("Enter");
        await click("Done");

        //Select bags
        await click("Bags");
        await click($(`[aria-label=Increase]`));
        await press("Escape");

        //Select stops
        await click("Stops");
        await click("No stops only");
        await press("Escape");

        //Select price
        await click("Price");
        await range($(`.gws-flights-filter__price-slider`)).select('400');
        await press("Escape");

        //Select times
        await click("Times");
        await click("No stops only");
        await press("Escape");

        //Take screenshot of all flight options
        await screenshot({fullPage:true});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();