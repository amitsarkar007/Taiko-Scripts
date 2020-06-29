// Use .env variables
require('dotenv').config()

const { openBrowser, goto, textBox, into, write, button, click, text, $, closeBrowser, toRightOf } = require('taiko');
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
        //await attach(process.env.JOB_CV, $(`[type=file]`));
        //await attach(process.env.JOB_CV, to(fileField($(`[type=file]`,{selectHiddenElement: true}))));
        //await attach(process.env.JOB_CV,$(`#LocalCVFile`,{selectHiddenElement: true}))
        await click(button("Upload Now"));

        // Verify Upload is successful
        if (await text("Upload Complete").exists()) {await console.log("Upload Complete");}

        // Sign out
        await click("Sign Out")

    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();