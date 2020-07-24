const { openBrowser, goto, text, closeBrowser, evaluate } = require('taiko');
var searchText = "admin";
(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: true});

        //Navigate to the page
        await goto('http://www.way2automation.com/angularjs-protractor/webtables/');

        //Enter text in a textbox
        await write(searchText,into(textBox({placeholder:"Search"})));

        //Some ChromeDevConsole commands to identify the table elements
        //document.querySelectorAll(".smart-table-data-cell")
        //document.getElementsByClassName("smart-table-data-row ng-scope").length
        //document.querySelector("tbody").children;
        //document.querySelectorAll("tbody > tr > td");
        //document.querySelectorAll("thead > tr > th");
        //document.getElementsByTagName("tr");
        //document.querySelectorAll("tbody > tr:nth-child(1) > td:nth-child(11)");
        //document.querySelectorAll("tbody > tr:nth-child(1) > td");

        //Store each occurrence of text in an array
        var textArray = await text(searchText).elements();

        //Display each element of array on console
        for (e of textArray) {
            console.log(await e.text());
        }

        //Display how many times the text occurs on console
        console.log("The text",searchText,"occurs",textArray.length,"times in the table.");

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();