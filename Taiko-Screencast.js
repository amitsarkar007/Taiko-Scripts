const { openBrowser, goto, link, click, button, closeBrowser, highlight, textBox } = require('taiko');
(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: false, args:['--window-size=1440,1000']});

        //Start recording in gif
        await screencast.startScreencast('output.gif');

        //Navigate to the page
        await goto('https://beta.giftli.co.uk/');

        // Accept Cookie alert
        await click("Yes, I accept Cookies");

        //Click link to sign in
        await click(link("Sign in"));

        //Enter incorrect user credentials
        await write("abc@gmail.com",into(textBox('Email address')));
        await write("password",into(textBox('Password')));
        await click(button("Sign in"));

        //Highlight error message
        await highlight("Sorry, your email address or password was not recognised");
    } catch (error) {
        console.error(error);
    } finally {
        //Stop recording in gif
        await screencast.stopScreencast();
        //Close browser
        await closeBrowser();
    }
})();