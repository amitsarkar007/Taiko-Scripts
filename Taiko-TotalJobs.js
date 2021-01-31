// Use .env variables
require('dotenv').config()

const { openBrowser, goto, click, textBox, into, write, button, fileField, to, attach, closeBrowser } = require('taiko');

(async () => {
    try {
        // Open browser and navigate to page
        await openBrowser({ headless: false });
        await goto("https://www.totaljobs.com/account/signin");

        // Accept cookies
        await click("Accept");

        // Enter username and password and sign in
        await write(process.env.JOB_USERNAME,into(textBox("Email")));
        await write(process.env.JOB_PASSWORD,into(textBox("Password")));
        await click(button("Sign in"));

        // Navigate to profile page to upload CV
        await goto("https://www.totaljobs.com/Authenticated/profile.aspx#cv");

        // Upload CV
        await click(button("Upload your CV"));
        await attach(process.env.JOB_CV, to(fileField("from this device")));

        // Save profile
        await click(button("Save my profile",{waitForEvents:['DOMContentLoaded']}));

        // Sign out
        await goto("https://www.totaljobs.com/account/signout",{waitForEvents:['DOMContentLoaded']});

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();