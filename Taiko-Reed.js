// Use .env variables
require('dotenv').config()

const { openBrowser, goto, textBox, into, write, button, click, text, $, closeBrowser } = require('taiko');
(async () => {
    try {
        // Open browser and navigate to page
        await openBrowser({ headless: false });
        await goto("www.reed.co.uk/account/signin#signin",{waitForEvents:['DOMContentLoaded']});

        // Enter username and password and sign in
        await write(process.env.JOB_USERNAME,into(textBox("Email")));
        await write(process.env.JOB_PASSWORD,into(textBox("Password")));
        await click(button("Sign in"));

        // Navigate to profile page
        await goto("www.reed.co.uk/account/",{waitForEvents:['DOMContentLoaded']});

        // Navigate to page to upload CV
        await click("Update CV");
        await click("Continue");

        //Upload CV
        await attach(process.env.JOB_CV, $(`[type=file]`));

        // Verify Upload is successful
        if (await text("Upload Complete").exists()) {await console.log("Upload Complete");}
        
        // Continue to profile page
        await click("Continue")

        // Sign out
        await goto("https://www.reed.co.uk/account/SignOut?returnUrl=",{waitForEvents:['DOMContentLoaded']});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();