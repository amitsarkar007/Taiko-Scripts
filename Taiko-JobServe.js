// Use .env variables
require('dotenv').config()

const { openBrowser, goto, textBox, into, write, button, click, fileField, to, closeBrowser, toRightOf } = require('taiko');
(async () => {
    try {
        // Open browser and navigate to page
        await openBrowser({ headless: false });
        await goto("https://www.jobserve.com/gb/en/Candidate/Login.aspx");

        //Allow cookies
        await click("Allow cookies");

        // Enter username and password and sign in
        await write(process.env.JOB_USERNAME,into(textBox(toRightOf("Email"))));
        await write(process.env.JOB_PASSWORD,into(textBox(toRightOf("Password"))));
        await click(button("Sign in"));

        // Navigate to page to upload CV
        await goto("https://www.jobserve.com/gb/en/Candidate/CandidateQuickPostResume.aspx?origin=resumes");

        //Upload CV
        await attach(process.env.JOB_CV, to(fileField({id: 'LocalCVFile'}, {selectHiddenElements : true})));
        await click(button("Upload Now"));

        //Alternative method to sign out
        await goto("https://www.jobserve.com/gb/en/logout.aspx");

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();