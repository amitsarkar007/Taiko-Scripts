const { openBrowser, goto, click, $, closeBrowser, into, textBox, write, dropDown, toRightOf, text } = require('taiko');
(async () => {
    try {
		//Open Browser in headless mode
        await openBrowser({ headless: true, args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-first-run',
            '--no-sandbox',
            '--no-zygote']});

        //Navigate to the page
		await goto("https://www.comparethemarket.com/");
		
		//Select car insurance
		await click("Car insurance");
		
        //Enter vehicle registration number
        await write("MK56GMG", into(textBox(toRightOf("Then please enter it here to get started:"))));
        await click("Find vehicle");

        //Enter vehicle value
        await clear(textBox("Do you know the current value of the car?"));
		await write("3000", into(textBox("Do you know the current value of the car?")));
		await click("Next");

		//Enter vehicle usage
        await dropDown("Month").select("January");
        await dropDown("Year").select("2020");
        await click("Social, domestic, pleasure and commuting (SDPC)");
        await write("40000", into(textBox("What is the total annual personal mileage for this car?")));
        await click("Office or factory car park");
        await click("Street outside home");
        await dropDown("How many cars are kept at your household (including this one)?").select("1");
        await dropDown("Do you use any other vehicles? (eg: company car, partner's car, etc)").select("No access to any other vehicles");
        await click("Next");

		//Enter personal details
		await dropDown("What is your title?").select("Mr");
        await write("John", into(textBox("First name")));
        await write("Smith", into(textBox("Last name")));
        await dropDown("Day",toRightOf("What is your date of birth?")).select("15");
        await dropDown("Month",toRightOf("What is your date of birth?")).select("October");
        await dropDown("Year",toRightOf("What is your date of birth?")).select("1986");
        await dropDown("Your relationship status?").select("Married");
        await click("Yes",toRightOf("Do you own your home?"));
        await click("No",toRightOf("Do you have any children under the age of 16?"));
        await write("20", into(textBox("What is the house number/name?")));
        await write("HA9 0RS",into(textBox(toRightOf("What is the postcode?"))));
        await click("Find my address");
        await dropDown("What is your employment status?").select("Self-Employed");
        await write("Software", into(textBox("What do you do for a living?")));
        await click("Software Consultant");
        await write("Computer", into(textBox("What type of industry do you work in?")));
        await click("Computers");
        await dropDown("Month",toRightOf("How long have you continuously lived in the UK?")).select("October");
        await dropDown("Year",toRightOf("How long have you continuously lived in the UK?")).select("2009");
        await click("No",toRightOf("Would you like to provide your driving licence number?"));
        await dropDown("How long have you held this licence?").select("5 Years");
        await click("No",toRightOf("Have you ever had an insurance policy declined, cancelled, voided or had special terms imposed?"));
        await click("No",toRightOf("Have you had any motor accidents, claims or losses in the past 5 years, no matter who was at fault or if a claim was made?"));
        await click("No",toRightOf("Have you had any driving related convictions, endorsements, penalties, disqualifications or bans in the past 5 years?"));
        await click("No",toRightOf("Have you got any unspent non-motoring-related criminal convictions?"));
        await click("Next");
        await click("No",toRightOf("Do you have any additional drivers?"));
        await click("Next");

        //Enter policy details
        await dropDown("What type of cover are you looking for?").select("Comprehensive");
        await click("One annual payment",toRightOf("How would you normally pay for your insurance?"));
        await dropDown("On which date within the next 30 days (including today) would you like your cover to start?").select("10 Jul");
        await dropDown("How many years of no claims discount (NCD) do you have?").select("5 Years");
        await click("Yes",toRightOf("Do you want to protect your no claims discount?"));
        await click("Next");

        //Enter additional products and features to your policy
        await text("Personal accident cover").exists();
        await click("Yes",toRightOf("Personal accident cover"));
        await click("No/I'll decide later",toRightOf("Courtesy car"));
        await click("Yes",toRightOf("Breakdown cover"));
        await click("No/I'll decide later",toRightOf("Motor legal protection"));
        await click("Next");

        //Enter account and contact details for your policy
        await write("johnsmith@gmail.com", into(textBox("Email")));
        await click("No, thanks",toRightOf("Providers with the 2 lowest prices may contact you to discuss your quotes. Are you happy to be contacted?"));
        await click("Do not contact");
        await click($(`[class*=styles_Check__mark]`),toRightOf("Please tick this box to confirm you have read and understood our website"));
        await click("Next");

	} catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();