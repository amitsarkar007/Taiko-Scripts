const { openBrowser, goto, click, closeBrowser, textBox } = require('taiko');
(async () => {
    try {
        // Open Browser and navigate to the page
        await openBrowser({ headless: true});
        await goto('https://danube-webshop.herokuapp.com/');

        // Accept Cookie alert
        await click("Log In");

        // Enter user credentials
        await write("user@email.com",into(textBox('Email')));
        await write("supersecure1",into(textBox('Password')));
        await click("Sign in");

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();