//Inspiration - https://spectrum.chat/taiko/general/how-to-click-each-element-in-a-elements-collection~df1cf523-f2f5-4e6f-a669-4229fb10deac

const { openBrowser, goto, text, closeBrowser } = require('taiko');
var searchText = "admin";
(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: true});

        //Navigate to the page
        await goto('http://www.way2automation.com/angularjs-protractor/webtables/');

        //Enter text in a textbox
        await write(searchText,into(textBox({placeholder:"Search"})));

        //Store each occurrence of text in an array
        var textArray = await text(searchText).elements();

        //Display each element of array on console
        for (e of textArray) {
            console.log(await e.text());
        }

        //Display array length on console
        console.log(textArray.length);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();