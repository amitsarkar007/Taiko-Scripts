const { openBrowser, goto, tap, goBack, clearHighlights, tableCell, press, scrollDown, screenshot, click, below, closeBrowser, text, textBox, highlight, radioButton, checkBox, toRightOf } = require('taiko');
(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: false });
        await goto('https://ultimateqa.com/simple-html-elements-for-automation/');
        
        //Click buttons
        await click("Click Me!");
        await goBack();
        await click("Click Me");
        await goBack();
        
        //Click an image
        await scrollDown(500);
        await click($(`.et_pb_image_wrap`));
        await goBack();
        
        //Enter text into a text box and then clear it
        await write("arun",into(textBox('Name')));
        await write("arun@gmail.com",into(textBox('Email')));
        await clear(textBox('Email'));
        await clear(textBox('Name'));
        
        //Select radio buttons
        await click(radioButton('Male'));
        await click(radioButton('Female'));
        await click(radioButton('Other'));
        
        //Check and uncheck a checkbox
        await click(checkBox('I have a bike'));
        await click(checkBox('I have a car'));
        await click(checkBox('I have a bike'));
        await click(checkBox('I have a car'));
        
        //Select an item from a Dropdown
        await scrollDown(500);
        await click($(`//select`));
        await press(['ArrowDown', 'ArrowDown', 'Enter']);
        
        //Click on a tab
        await click("Tab 1");
        await click("Tab 2");
        await tap("Tab 2 content");
        
        //Handle a toggle
        await click("Open toggle to read text");
        
        //Highlight an element in a table
        await scrollDown(500);
        await highlight(tableCell({row:1, col:2}));
        await clearHighlights();
        
        //Click a link
        await scrollDown(500);
        await click("Go to login page");
        await goBack();
        
        //Click on different buttons
        await click('Xpath Button 1');
        await goBack();
        await click('Xpath Button 1',below('Button 2'));
        await goBack();
        
        //Highlight text
        await scrollDown(500);
        await highlight("Highlight me");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();