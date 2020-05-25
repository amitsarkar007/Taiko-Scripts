// Source - https://opensourceforu.com/2020/03/add-superpowers-to-your-tests-with-taiko/

const { openBrowser, goto, evaluate, closeBrowser } = require('taiko');
(async () => {
    try {
        //Open Browser and navigate to the page
        await openBrowser({ headless: false });
        await goto('google.com');
        
        // Type "JavaScript" into the search bar
        await evaluate(() => {document.querySelector('input[name="q"]').value = 'Gauge Taiko';});
        await evaluate(() => {document.querySelector('input[value="Google Search"]').click();});
        
        // Get all the search result URLs
        const links = await evaluate(function getUrls() {return Array.from(document.querySelectorAll('a cite').values()).map(el => el.innerHTML);});
        console.log(links);
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();