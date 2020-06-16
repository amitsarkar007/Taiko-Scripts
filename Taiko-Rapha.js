const { openBrowser, scrollDown, goto, click, $, closeBrowser, into, textBox, write, dropDown, evaluate, button, waitFor } = require('taiko');
(async () => {
    try {
		//Open Browser and navigate to the page
		await openBrowser({ headless: false });
		await goto("https://www.rapha.cc/gb/en/");
		
		//Accept Cookie alert
		await click("Accept & close");
		
		//Select Men's Jerseys from the Menu
		await click("Men");
		await click("Jerseys");

		//Filter the Jerseys based on size
		await click($(`[data-selenium=filter--size]`));
		await click('Small');
		await click('Large');
		await click($(`[data-selenium=filter--size]`));

		//Scroll down to select Brevet Jersey
		await scrollDown(1000);
		await waitFor(300);
		await click("Brevet Jersey");

		//Select the size of the jersey and add it to basket
		await dropDown({name:'size-selector'}).select('XX-Large');
		await click('Add to Basket');

		//Go to the basket and checkout as a guest
		await click('Go to Basket');
		await click('Checkout');
		await click("Guest Checkout",{waitForEvents:['DOMContentLoaded']});
		await write('abc@gmail.com', into(textBox('Email')),{waitForEvents:['DOMContentLoaded']});
		await click(button('Checkout as a Guest'));

		//Enter personal details and then continue to shipping
		await dropDown({id:'title'}).select('Mr');
		await write('Arun', into(textBox('FIRST NAME')));
		await write('Kumar', into(textBox('Last Name')));
		await write('+4474921612060', into(textBox('Phone number')));
		await dropDown({id:'address.country'}).select('United Kingdom');
		await write('BR1 4A', into(textBox('Address Finder')));
		await click($(`//*[contains(text(),'4AA')]`));
		await click($(`//*[contains(text(),'29A')]`));
		await click("Continue to Shipping");

		//Enter all payment details and make sure the Place Order button is activated
		await click("Continue to Payment");
		await evaluate($("//div[@class='adyen-payment']//span[text()='Cardholder name']"),(elem) => elem.click());
		await write('arun kumar');
		await write('1111 2222 3333 4444', into($(`//input[@autocomplete='cc-number']`)));
		await write('02/21', into($(`//input[@autocomplete='cc-exp']`)));
		await write('123', into($(`//input[@autocomplete='cc-csc']`)));
		await button("Place Order").exists();
	} catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();