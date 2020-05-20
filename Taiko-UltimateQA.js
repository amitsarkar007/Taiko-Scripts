const { openBrowser, goto, tap, goBack, clearHighlights, tableCell, press, scrollDown, screenshot, click, below, closeBrowser, text, textBox, highlight, radioButton, checkBox, toRightOf } = require('taiko');
(async () => {
    try {
        await openBrowser({ headless: false });
        await goto('https://ultimateqa.com/simple-html-elements-for-automation/');
        await click("Click Me!");
        await goBack();
        await click("Click Me");
        await goBack();
        await scrollDown(500);
        await click($(`.et_pb_image_wrap`));
        await goBack();
        await write("arun",into(textBox('Name')));
        await write("arun@gmail.com",into(textBox('Email')));
        await clear(textBox('Email'));
        await clear(textBox('Name'));
        await click(radioButton('Male'));
        await click(radioButton('Female'));
        await click(radioButton('Other'));
        await click(checkBox('I have a bike'));
        await click(checkBox('I have a car'));
        await click(checkBox('I have a bike'));
        await click(checkBox('I have a car'));
        await scrollDown(500);
        await click($(`//select`));
        await press(['ArrowDown', 'ArrowDown', 'Enter']);
        await click("Tab 1");
        await click("Tab 2");
        await tap("Tab 2 content");
        await click("Open toggle to read text");
        await scrollDown(500);
        await highlight(tableCell({row:1, col:2}));
        await clearHighlights();
        await scrollDown(500);
        await click("Go to login page");
        await goBack();
        await click('Xpath Button 1');
        await goBack();
        await click('Xpath Button 1',below('Button 2'));
        await goBack();
        await scrollDown(500);
        await highlight("Highlight me");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();