const { openBrowser, scrollDown, goto, click, $, closeBrowser, into, textBox, write, dropDown, evaluate, button, waitFor } = require('taiko');
(async () => {
    try {
			await openBrowser({ headless: false });
			await goto("https://www.rapha.cc/gb/en/");
			await click("Accept & close");
			await click("Men");
			await click("Jerseys");
			await click($(`[data-selenium=filter--size]`));
			await click('Small');
			await click('Large');
			await click($(`[data-selenium=filter--size]`));
			await scrollDown(1000);
			await waitFor(300);
			await click("Brevet Jersey");
			await dropDown({name:'size-selector'}).select('XX-Large')
			await click('Add to Basket');
			await click('Go to Basket');
			await click('Checkout');
			await click("Guest Checkout",{waitForEvents:['DOMContentLoaded']});
			await write('abc@gmail.com', into(textBox('Email')),{waitForEvents:['DOMContentLoaded']});
			await click(button('Checkout as a Guest'));
			await dropDown({id:'title'}).select('Mr');
			await write('Arun', into(textBox('FIRST NAME')));
			await write('Kumar', into(textBox('Last Name')));
			await write('+4474921612060', into(textBox('Phone number')));
			await dropDown({id:'address.country'}).select('United Kingdom');
			await write('BR1 4A', into(textBox('Address Finder')));
			await click($(`//*[contains(text(),'4AA')]`));
			await click($(`//*[contains(text(),'29A')]`));
			await click("Continue to Shipping");
			await click("Continue to Payment");
			await evaluate($("//div[@class='adyen-payment']//span[text()='Cardholder name']"),(elem) => elem.click());
			await write('arun kumar');
			await write('1111 2222 3333 4444', into($(`//input[@autocomplete='cc-number']`)));
			await write('02/21', into($(`//input[@autocomplete='cc-exp']`)));
			await write('123', into($(`//input[@autocomplete='cc-csc']`)));
			await button("Place Order").exists();
		}
	catch (error) { console.error(error); } 
	finally { await closeBrowser(); }
})();
