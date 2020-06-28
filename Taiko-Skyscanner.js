//Script still in progress.

const { openBrowser, goto, click, $, closeBrowser, textBox, button, below, write, screenshot, dropDown, checkBox, toRightOf, scrollDown } = require('taiko');
const origin_airport = "Berlin";
const destination_airport = "Paris";
const departure_month = "November 2020";
const departure_date = "8";
const return_month = "December 2020";
const return_date = "14";

(async () => {
    try {
        //Open browser and navigate to the page
        await openBrowser({ headless: false });
        await goto("https://www.skyscanner.net/");

        //Accept cookie alert
        await click("OK");

        //Select direct flights
        await click(checkBox("Direct flights only"));

        //Select departure airport
        await click(textBox(),below("From"));
        await write(origin_airport);
        await click(origin_airport);

        //Select arrival airport
        await click(textBox(),below("To"));
        await write(destination_airport);
        await click(destination_airport);

        //Select departure date
        await click(button(),below("Depart"));
        await dropDown(below("Specific date")).select(departure_month);
        await click(departure_date);

        //Select return date
        await click(button(),below("Return"));
        await dropDown(below("Specific date")).select(return_month);
        await click(return_date);

        //Select class of travel
        await click(button(),below("Cabin Class & Travellers"));
        await dropDown(below("Cabin class")).select("First class");

        //Select adults travelling
        await click($(`.bpk-nudger__icon`),below("Adults"),toRightOf("1"));

        //Select children travelling
        await click($(`.bpk-nudger__icon`),below("Children"),toRightOf("0"));
        await dropDown(below("Age of child 1")).select("5");
        await click("Done");

        //Search available flights
        await click("Search flights");

        //Take screenshot of all flight options
        await scrollDown(1000)
        await screenshot({fullPage:true});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();