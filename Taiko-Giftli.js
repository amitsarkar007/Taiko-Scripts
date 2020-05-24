const { openBrowser, goto, link, click, button, closeBrowser, highlight, textBox } = require('taiko');
(async () => {
    try {
        
        await openBrowser({ headless: false ,args:['--window-size=1440,1000']});
        await goto('https://beta.giftli.co.uk/');
        await click("Yes, I accept Cookies");
        await click(link("Sign in"));
        await write("abc@gmail.com",into(textBox('Email address')));
        await write("password",into(textBox('Password')));
        await click(button("Sign in"));
        await highlight("Sorry, your email address or password was not recognised");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();