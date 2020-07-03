const { openBrowser, goto, link, click, button, closeBrowser, highlight, textBox, diagnostics } = require('taiko');
const {
    startTracing,
    endTracing,
    getSpeedIndex,
    getPerformanceMetrics
  } = diagnostics;

(async () => {
    try {
        //Open Browser
        await openBrowser({ headless: true, args:['--window-size=1440,1000']});

        //Start Tracing
        await startTracing();

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
        //Stop Tracing
        await endTracing();

        //Get Speed Index and Performance Metrics
        const speedIndex = await getSpeedIndex();
        const performanceMetrics = await getPerformanceMetrics();

        //Get Speed Index and Performance Metrics
        console.log("Speed Index is", speedIndex);
        console.log("Performance Metrics is", performanceMetrics);

        //Close browser
        await closeBrowser();
    }
})();