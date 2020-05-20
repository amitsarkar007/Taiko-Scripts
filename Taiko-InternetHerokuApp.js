const { openBrowser, goto, clearHighlights, tableCell, press, click, below, closeBrowser, text, highlight, dropDown, to, attach, fileField, alert, confirm, prompt, hover, image, toRightOf, switchTo, closeTab, listItem, near } = require('taiko');
(async () => {
    try {
        //Open a browser
        await openBrowser({ headless: false });
        
        //Basic authentication
        //await goto("https://the-internet.herokuapp.com/basic_auth");
        //await goto("the-internet.herokuapp.com/basic_auth");
        
        //Highlight different elements in a table
        await goto("https://the-internet.herokuapp.com/challenging_dom");
        await highlight(tableCell({row:3, col:2}));
        await highlight(tableCell({row:6, col:2}));
        await clearHighlights();
        
        // Select an option from a Dropdown
        await goto("https://the-internet.herokuapp.com/dropdown");
        await dropDown({id:"dropdown"}).select("Option 2");

        //Drag and drop an element from one location to another
        //await goto("https://the-internet.herokuapp.com/drag_and_drop");
        //await dragAndDrop($(`#column-a`), into($(`#column-b`)));
        //await dragAndDrop($(`#column-a`), {right:215});

        //Upload a file
        await goto("https://the-internet.herokuapp.com/upload")
        await attach("OB.ico", to(fileField({id:'file-upload'})));
        await click("Upload");

        //Handle different JS alerts
        await goto("https://the-internet.herokuapp.com/javascript_alerts");
        await alert("I am a JS Alert", async () => await accept()); 
        await click('Click for JS Alert');
        await confirm("I am a JS Confirm", async () => await accept()); 
        await click('Click for JS Confirm');
        await prompt("I am a JS prompt", async () => await accept("prompt clicked successfully"));
        await click('Click for JS Prompt');

        //Click through a JQuery UI Menu
        await goto("https://the-internet.herokuapp.com/jqueryui/menu");
        await click("Enabled");
        await click("Downloads");
        await click("CSV");

        //Type a number to an input field and increase the count
        await goto("https://the-internet.herokuapp.com/inputs");
        await write("7",into($(`[type=number]`)));
        await press(["ArrowUp","ArrowUp"]);
        
        //Hover over different images
        await goto("https://the-internet.herokuapp.com/hovers");
        await hover(image("User Avatar"));
        await hover(image("User Avatar",toRightOf(image("User Avatar"))));
        await hover(image("User Avatar",toRightOf(image("User Avatar",toRightOf(image("User Avatar"))))));

        //Move the slider
        //await goto("https://the-internet.herokuapp.com/horizontal_slider");
        //await range

        //Open and close a new Tab
        await goto("https://the-internet.herokuapp.com/windows");
        await click("Click Here");
        await closeTab();
        
        //Highlight different Shadow DOM
        await goto("https://the-internet.herokuapp.com/shadowdom");
        await highlight(`Let's`);
        await highlight(listItem(`Let's`));
        await clearHighlights();

        //Shifting images
        await goto("https://the-internet.herokuapp.com/shifting_content/image");
        await click("click here");
        await click("click here",near("shift",{offset:100}));
        await click("click here",near("simple",{offset:100}));
        
        //Highlight table cells
        await goto("https://the-internet.herokuapp.com/tables");
        await highlight(tableCell({row:3, col:2}));
        await highlight(tableCell({row:2, col:5}));
        await highlight(tableCell({class:'dues'}), below(text("$100.00")));
        await highlight(tableCell({class:'email'}));
        await clearHighlights();

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();